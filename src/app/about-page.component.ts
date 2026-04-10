import { Component } from '@angular/core';
import { aboutHighlights, portfolioName } from './portfolio-data';

@Component({
  selector: 'app-about-page',
  template: `
    <section class="section-card split-section" appReveal>
      <div>
        <p class="section-kicker">About me</p>
        <h3>Profile overview</h3>
        <p>
          I focus on building dependable backend systems, integrating external platforms, and keeping
          services maintainable for the long run. My recent experience includes public-sector systems,
          payment workflows, and API integrations across several platforms.
        </p>
        <p>
          {{ name }} values clean architecture, practical APIs, and production-friendly code that is easy
          to support.
        </p>
      </div>

      <div class="stacked-points">
        @for (point of highlights; track point) {
          <article appReveal appTilt3d>
            <span class="point-dot"></span>
            <p>{{ point }}</p>
          </article>
        }
      </div>
    </section>
  `
})
export class AboutPageComponent {
  readonly name = portfolioName;
  readonly highlights = aboutHighlights;
}

