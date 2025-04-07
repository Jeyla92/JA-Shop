import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { SpotsComponent } from './spots/spots.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    SpotsComponent,
    FooterComponent,
  ],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-spots></app-spots>
    <app-footer></app-footer>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-ecomm';

  constructor(private http: HttpClient) {
    this.http.get('/api/products').subscribe((products) => {
      console.log(products);
    });
  }
}
