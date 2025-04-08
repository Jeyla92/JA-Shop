import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailComponent } from './card/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:query', component: SearchComponent },
  { path: 'products/:slug', component: ProductDetailComponent },
];
