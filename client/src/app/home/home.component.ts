import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { SpotsComponent } from '../spots/spots.component';
import { ProductCardComponent } from '../card/product-card.component';
import { FeaturesComponent } from '../features/features.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    SpotsComponent,
    ProductCardComponent,
    FeaturesComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-spots></app-spots>
    <app-product-card></app-product-card>
    <app-features></app-features>
  `,
})
export class HomeComponent {}
