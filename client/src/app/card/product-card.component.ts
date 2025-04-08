import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';     
import { RouterModule } from '@angular/router';     
import { Product } from '../card/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true, // ✅ VIKTIGT! Gör komponenten standalone
  imports: [CommonModule, RouterModule], // ✅ Importera moduler för ngFor och routerLink
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Flared Jeans',
      brand: 'Levis',
      price: 399,
      imageUrl: '/woman1.jpg',
      slug: 'flared-jeans'
    },
    {
      id: 2,
      name: 'Light Blue Jeans',
      brand: 'Levis',
      price: 349,
      imageUrl: '/woman2.jpg',
      slug: 'light-blue-jeans'
    },
    {
      id: 3,
      name: 'Straight Fit Jeans',
      brand: 'Levis',
      price: 379,
      imageUrl: '/woman3.jpg',
      slug: 'straight-fit-jeans'
    },
    {
      id: 4,
      name: 'Relaxed Fit Jeans',
      brand: 'Levis',
      price: 359,
      imageUrl: '/woman4.jpg',
      slug: 'relaxed-fit-jeans'
    },
    {
      id: 5,
      name: 'Bootcut Jeans',
      brand: 'Levis',
      price: 429,
      imageUrl: '/woman5.jpg',
      slug: 'bootcut-jeans'
    },
    {
      id: 6,
      name: 'Skinny Black Jeans',
      brand: 'Levis',
      price: 299,
      imageUrl: '/woman6.jpg',
      slug: 'skinny-black-jeans'
    },
    {
      id: 7,
      name: 'Grey High-Waist Jeans',
      brand: 'Levis',
      price: 319,
      imageUrl: '/woman7.jpg',
      slug: 'grey-high-waist-jeans'
    },
    {
      id: 8,
      name: 'Blue Slim Fit Jeans',
      brand: 'Levis',
      price: 339,
      imageUrl: '/woman8.jpg',
      slug: 'blue-slim-fit-jeans'
    }
  ];
}
