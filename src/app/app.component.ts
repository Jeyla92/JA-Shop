import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { SpotsComponent } from './spots/spots.component';
 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, SpotsComponent],
  template: `
    <app-hero></app-hero>
    <app-spots></app-spots>
    <router-outlet />
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-ecomm';
}
