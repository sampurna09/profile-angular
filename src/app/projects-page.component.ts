import { Component } from '@angular/core';
import { projects } from './portfolio-data';

@Component({
  selector: 'app-projects-page',
  template: `
    <section class="section-card" appReveal>
      <p class="section-kicker">Projects</p>
      <h3>Selected backend and integration projects</h3>
      <p>
        Practical backend work with clear outcomes across fintech, public services, and
        platform integrations.
      </p>

      <div class="projects-grid">
        @for (project of items; track project.title) {
          <article class="project-card depth-card" appTilt3d appReveal>
            <div class="project-card-inner">
              <div class="project-thumb-wrap">
                <img class="project-thumb" [src]="project.thumbnail" [alt]="project.title + ' thumbnail'" />
              </div>

              <div class="project-head">
                <span>{{ project.category }}</span>
                <h4>{{ project.title }}</h4>
              </div>

              <p>{{ project.description }}</p>
              <p><strong>{{ project.impact }}</strong></p>
              <div class="skill-tags compact">
                @for (tech of project.tech; track tech) {
                  <span>{{ tech }}</span>
                }
              </div>
            </div>
          </article>
        }
      </div>
    </section>
  `
})
export class ProjectsPageComponent {
  readonly items = projects;
}

