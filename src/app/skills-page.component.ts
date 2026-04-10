import { Component } from '@angular/core';
import { portfolioName, skillGroups } from './portfolio-data';

@Component({
  selector: 'app-skills-page',
  template: `
    <section class="section-card" appReveal>
      <p class="section-kicker">Skills</p>
      <h3>Core technical skills</h3>
      <p>
        {{ name }} builds reliable APIs and integrations with focus on maintainability,
        secure data handling, and smooth delivery.
      </p>

      <div class="skills-grid">
        @for (group of skills; track group.name) {
          <article class="skill-card depth-card" appTilt3d appReveal>
            <h4>{{ group.name }}</h4>
            <div class="skill-tags">
              @for (item of group.items; track item) {
                <span>{{ item }}</span>
              }
            </div>
          </article>
        }
      </div>
    </section>
  `
})
export class SkillsPageComponent {
  readonly name = portfolioName;
  readonly skills = skillGroups;
}

