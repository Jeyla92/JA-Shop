import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailComponent } from './card/product-detail.component';
import { ListComponent } from './admin/list/list.component';
import { NewComponent } from './admin/new/new.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:query', component: SearchComponent },
  { path: 'products/:slug', component: ProductDetailComponent },
  { path: 'admin/list', component: ListComponent },
  { path: 'admin/new', component: NewComponent },
];
