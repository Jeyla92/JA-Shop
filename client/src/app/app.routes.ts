import { Routes } from '@angular/router';
import { ProductDetailComponent } from './card/product-detail.component'; // 👈 importera

export const routes: Routes = [
  {
    path: 'products/:slug',
    component: ProductDetailComponent
  }
];
