import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page.component';
import { ContactPageComponent } from './contact-page.component';
import { ExperiencePageComponent } from './experience-page.component';
import { HomePageComponent } from './home-page.component';
import { ProjectsPageComponent } from './projects-page.component';
import { MouseParallaxDirective } from './mouse-parallax.directive';
import { RevealOnScrollDirective } from './reveal-on-scroll.directive';
import { SkillsPageComponent } from './skills-page.component';
import { Tilt3dDirective } from './tilt-3d.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    SkillsPageComponent,
    ProjectsPageComponent,
    ExperiencePageComponent,
    ContactPageComponent,
    MouseParallaxDirective,
    Tilt3dDirective,
    RevealOnScrollDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
