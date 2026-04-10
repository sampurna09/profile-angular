import { Component } from '@angular/core';
import { homeStats, portfolioIntro, portfolioName, portfolioTitle, profilePhoto } from './portfolio-data';

@Component({
  selector: 'app-home-page',
  template: `
    <section class="section-card hero" appReveal>
      <div class="hero-copy">
        <p class="eyebrow">Backend engineer • API specialist • Integration-focused</p>
        <h1>{{ name }}</h1>
        <h2>{{ title }}</h2>
        <p class="lead">{{ intro }}</p>

        <div class="hero-actions">
          <a class="button button-primary" routerLink="/projects">View projects</a>
          <a class="button button-ghost" routerLink="/about">About me</a>
          <a class="button button-ghost" routerLink="/contact">Contact</a>
        </div>

        <div class="hero-stats">
          @for (stat of stats; track stat.label) {
            <article>
              <strong>{{ stat.value }}</strong>
              <span>{{ stat.label }}</span>
            </article>
          }
        </div>
      </div>

      <div class="hero-visual">
        <div class="orb orb-one"></div>
        <div class="orb orb-two"></div>
        <div class="orb orb-three"></div>

        <figure class="profile-card depth-card" appTilt3d appReveal>
          <img [src]="photo" alt="Profile photo of {{ name }}" class="profile-photo" />
          <figcaption class="card-label">{{ name }}</figcaption>
        </figure>

        <div class="glass-card depth-card" appTilt3d appReveal>
          <p class="card-label">Core stack</p>
          <ul>
            <li>Java & Spring Boot</li>
            <li>REST APIs & integrations</li>
            <li>SQL, Kafka, ActiveMQ</li>
            <li>Git & CI / CD</li>
          </ul>
        </div>

        <div class="floating-chip chip-one">Reliable services</div>
        <div class="floating-chip chip-two">Clean APIs</div>

        <div class="mini-status depth-card" appTilt3d appReveal>
          <span class="mini-status-label">Current focus</span>
          <strong>Backend + integration engineering</strong>
          <p>Government systems, payment flows, and dependable service handshakes.</p>
        </div>
      </div>
    </section>

    <section class="section-card split-section" appReveal>
      <div>
        <p class="section-kicker">Profile</p>
        <h3>Focused user profile with clear information hierarchy</h3>
        <p>
          This site is structured so recruiters and teams can quickly understand my background,
          technical strengths, and project impact.
        </p>
      </div>

      <div class="stacked-points">
        @for (item of pageLinks; track item.label) {
          <article appReveal>
            <span class="point-dot"></span>
            <p><strong>{{ item.label }}:</strong> {{ item.description }}</p>
          </article>
        }
      </div>
    </section>
  `
})
export class HomePageComponent {
  readonly name = portfolioName;
  readonly title = portfolioTitle;
  readonly intro = portfolioIntro;
  readonly stats = homeStats;
  readonly photo = profilePhoto;

  readonly pageLinks = [
    { label: 'About', description: 'A quick summary of my backend and integration experience.' },
    { label: 'Skills', description: 'Java, Spring Boot, SQL, Kafka, ActiveMQ, and delivery tools.' },
    { label: 'Projects', description: 'Real work across payment systems, public services, and integrations.' },
    { label: 'Experience', description: 'A compact timeline of my backend role and production support work.' },
    { label: 'Contact', description: 'Email, GitHub, and LinkedIn links for quick reach-out.' }
  ];
}

