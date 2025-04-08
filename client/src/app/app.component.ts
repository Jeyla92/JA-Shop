import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './card/product-card.component'; // ✅ lägg till
import { FeaturesComponent } from './features/features.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <router-outlet />
    <app-footer></app-footer>
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
