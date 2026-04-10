import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navItems, portfolioName, portfolioTitle } from './portfolio-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            inset: 0,
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [style({ opacity: 0, transform: 'translateY(20px) scale(0.985)' })], { optional: true }),
        group([
          query(':leave', [animate('260ms ease', style({ opacity: 0, transform: 'translateY(-10px) scale(0.99)' }))], { optional: true }),
          query(':enter', [animate('420ms cubic-bezier(0.2, 0.8, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  readonly name = portfolioName;
  readonly title = portfolioTitle;
  readonly navItems = navItems;
  isLightTheme = false;
  showIntro = true;

  constructor() {
    const savedTheme = typeof window !== 'undefined' ? window.localStorage.getItem('portfolio-theme') : null;
    this.isLightTheme = savedTheme === 'light';

    setTimeout(() => {
      this.showIntro = false;
    }, 1200);
  }

  prepareRoute(outlet: RouterOutlet): string {
    return outlet?.activatedRouteData?.['animation'] ?? 'static';
  }

  toggleTheme(): void {
    this.isLightTheme = !this.isLightTheme;

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('portfolio-theme', this.isLightTheme ? 'light' : 'dark');
    }
  }
}
