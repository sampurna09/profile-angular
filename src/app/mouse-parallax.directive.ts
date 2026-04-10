import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseParallax]'
})
export class MouseParallaxDirective {
  private rafId = 0;
  private targetX = 0;
  private targetY = 0;
  private spotlightX = 0;
  private spotlightY = 0;
  private spotlightOpacity = 0;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {
    this.apply(0, 0);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const normalizedX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const normalizedY = ((event.clientY - rect.top) / rect.height) * 2 - 1;

    this.targetX = Math.max(-1, Math.min(1, normalizedX));
    this.targetY = Math.max(-1, Math.min(1, normalizedY));
    this.spotlightX = event.clientX - rect.left;
    this.spotlightY = event.clientY - rect.top;
    this.spotlightOpacity = 0.9;
    this.scheduleApply();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    this.targetX = 0;
    this.targetY = 0;
    this.spotlightX = rect.width / 2;
    this.spotlightY = rect.height / 2;
    this.spotlightOpacity = 0;
    this.scheduleApply();
  }

  private scheduleApply(): void {
    if (this.rafId) {
      return;
    }

    this.rafId = requestAnimationFrame(() => {
      this.apply(this.targetX, this.targetY);
      this.rafId = 0;
    });
  }

  private apply(x: number, y: number): void {
    const host = this.elementRef.nativeElement;
    host.style.setProperty('--pointer-x', x.toFixed(3));
    host.style.setProperty('--pointer-y', y.toFixed(3));
    host.style.setProperty('--mouse-x', `${this.spotlightX.toFixed(1)}px`);
    host.style.setProperty('--mouse-y', `${this.spotlightY.toFixed(1)}px`);
    host.style.setProperty('--spotlight-opacity', this.spotlightOpacity.toFixed(3));
  }
}

