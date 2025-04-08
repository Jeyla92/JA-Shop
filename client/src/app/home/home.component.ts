// home.component.ts
import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { SpotsComponent } from '../spots/spots.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SpotsComponent],
  template: `
    <app-hero></app-hero>
    <app-spots></app-spots>
  `,
})
export class HomeComponent {}
