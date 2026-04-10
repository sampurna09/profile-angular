import { Component } from '@angular/core';
import { contacts, portfolioName } from './portfolio-data';

@Component({
  selector: 'app-contact-page',
  template: `
    <section class="section-card contact-card" appReveal>
      <p class="section-kicker">Contact</p>
      <h3>Get in touch</h3>
      <p>
        If you would like to discuss Java backend roles, integrations, or collaboration,
        these are the best channels to reach {{ name }}.
      </p>

      <div class="contact-links">
        @for (contact of items; track contact.label) {
          <a
            class="contact-link depth-card"
            [href]="contact.href"
            target="_blank"
            rel="noopener"
            appTilt3d
            appReveal
          >
            <span>{{ contact.label }}</span>
            <strong>{{ contact.value }}</strong>
          </a>
        }
      </div>

      <div class="hero-actions" style="margin-top: 24px;">
        <a class="button button-primary" routerLink="/projects">See projects</a>
        <a class="button button-ghost" routerLink="/">Back home</a>
      </div>
    </section>
  `
})
export class ContactPageComponent {
  readonly name = portfolioName;
  readonly items = contacts;
}

