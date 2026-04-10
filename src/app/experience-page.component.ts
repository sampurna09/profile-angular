import { Component } from '@angular/core';
import { experience } from './portfolio-data';

@Component({
  selector: 'app-experience-page',
  template: `
    <section class="section-card split-section" appReveal>
      <div>
        <p class="section-kicker">Experience</p>
        <h3>{{ role }} &#64; {{ company }}</h3>
        <p>{{ period }}</p>
        <p>
          Delivered backend systems and integration support in production environments where
          reliability and correctness were critical.
        </p>
      </div>

      <div class="experience-card depth-card">
        @for (bullet of bullets; track bullet) {
          <article appReveal appTilt3d>
            <span class="timeline-dot"></span>
            <p>{{ bullet }}</p>
          </article>
        }
      </div>
    </section>
  `
})
export class ExperiencePageComponent {
  readonly role = experience.role;
  readonly company = experience.company;
  readonly period = experience.period;
  readonly bullets = experience.bullets;
}

