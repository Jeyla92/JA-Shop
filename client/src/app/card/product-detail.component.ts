import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from './product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="product">
      <h1>{{ product.name }}</h1>
      <img [src]="product.imageUrl" [alt]="product.name" />
      <p><strong>Märke:</strong> {{ product.brand }}</p>
      <p><strong>Pris:</strong> {{ product.price }} SEK</p>
      <p><strong>Slug:</strong> {{ product.slug }}</p>
    </div>
    <div *ngIf="!product">
      <p>Produkten kunde inte hittas.</p>
    </div>
  `
})
export class ProductDetailComponent {
  product: Product | undefined;

  // 💡 Mockade produkter – samma som i product-card.component.ts
  private allProducts: Product[] = [
    {
      id: 1, name: 'Flared Jeans', brand: 'Levis', price: 399, imageUrl: '/woman1.jpg', slug: 'flared-jeans'
    },
    {
      id: 2, name: 'Light Blue Jeans', brand: 'Levis', price: 349, imageUrl: '/woman2.jpg', slug: 'light-blue-jeans'
    },
    {
      id: 3, name: 'Straight Fit Jeans', brand: 'Levis', price: 379, imageUrl: '/woman3.jpg', slug: 'straight-fit-jeans'
    },
    {
      id: 4, name: 'Relaxed Fit Jeans', brand: 'Levis', price: 359, imageUrl: '/woman4.jpg', slug: 'relaxed-fit-jeans'
    },
    {
      id: 5, name: 'Bootcut Jeans', brand: 'Levis', price: 429, imageUrl: '/woman5.jpg', slug: 'bootcut-jeans'
    },
    {
      id: 6, name: 'Skinny Black Jeans', brand: 'Levis', price: 299, imageUrl: '/woman6.jpg', slug: 'skinny-black-jeans'
    },
    {
      id: 7, name: 'Grey High-Waist Jeans', brand: 'Levis', price: 319, imageUrl: '/woman7.jpg', slug: 'grey-high-waist-jeans'
    },
    {
      id: 8, name: 'Blue Slim Fit Jeans', brand: 'Levis', price: 339, imageUrl: '/woman8.jpg', slug: 'blue-slim-fit-jeans'
    }
  ];

  constructor(private route: ActivatedRoute) {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.product = this.allProducts.find(p => p.slug === slug || slug === decodeURIComponent(p.slug));
  }
}
