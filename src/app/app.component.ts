import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { SpotsComponent } from './spots/spots.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, SpotsComponent, FooterComponent],
  template: `
    <app-hero></app-hero>
    <app-spots></app-spots>
    <app-footer></app-footer>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-ecomm';
}
