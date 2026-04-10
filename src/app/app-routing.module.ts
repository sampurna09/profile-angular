import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page.component';
import { ContactPageComponent } from './contact-page.component';
import { ExperiencePageComponent } from './experience-page.component';
import { HomePageComponent } from './home-page.component';
import { ProjectsPageComponent } from './projects-page.component';
import { SkillsPageComponent } from './skills-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full', data: { animation: 'home' } },
  { path: 'about', component: AboutPageComponent, data: { animation: 'about' } },
  { path: 'skills', component: SkillsPageComponent, data: { animation: 'skills' } },
  { path: 'projects', component: ProjectsPageComponent, data: { animation: 'projects' } },
  { path: 'experience', component: ExperiencePageComponent, data: { animation: 'experience' } },
  { path: 'contact', component: ContactPageComponent, data: { animation: 'contact' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
