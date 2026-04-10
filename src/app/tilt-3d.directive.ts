import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTilt3d]'
})
export class Tilt3dDirective {
  @Input() set appTilt3d(value: number | string) {
    const parsed = typeof value === 'number' ? value : Number(value);
    this.strength = Number.isFinite(parsed) ? parsed : 10;
  }

  private rafId = 0;
  private strength = 10;
  private x = 0;
  private y = 0;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2
  ) {
    this.renderer.addClass(this.elementRef.nativeElement, 'interactive-tilt');
    this.apply(0, 0);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    this.x = py * -this.strength;
    this.y = px * this.strength;
    this.scheduleApply();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.x = 0;
    this.y = 0;
    this.scheduleApply();
  }

  private scheduleApply(): void {
    if (this.rafId) {
      return;
    }

    this.rafId = requestAnimationFrame(() => {
      this.apply(this.x, this.y);
      this.rafId = 0;
    });
  }

  private apply(x: number, y: number): void {
    const host = this.elementRef.nativeElement;
    host.style.transform = `perspective(1200px) rotateX(${x.toFixed(3)}deg) rotateY(${y.toFixed(3)}deg)`;
  }
}

