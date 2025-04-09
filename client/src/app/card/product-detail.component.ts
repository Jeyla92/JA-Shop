import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from './product.model';
import { FeaturesComponent } from '../features/features.component'; // kontrollera sökvägen!

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FeaturesComponent], // <-- här lägger du till FeaturesComponent
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  similarProducts: Product[] = [];

  private allProducts: Product[] = [
    { id: 1, name: 'Flared Jeans', brand: 'Levis', price: 399, imageUrl: '/woman1.jpg', slug: 'flared-jeans', description: 'Trendiga flared jeans med klassisk passform upptill och utsvängda ben som skapar en smickrande silhuett.' },
    { id: 2, name: 'Light Blue Jeans', brand: 'Levis', price: 349, imageUrl: '/woman2.jpg', slug: 'light-blue-jeans', description: 'Uppdatera din garderob med dessa stilrena flared jeans i ljusblå denim. Jeansen har en klassisk passform med hög midja, smal silhuett över höfter och lår, och snyggt utsvängda ben som skapar en feminin och balanserad look.' },
    { id: 3, name: 'Straight Fit Jeans', brand: 'Levis', price: 379, imageUrl: '/woman3.jpg', slug: 'straight-fit-jeans', description: 'Dessa straight fit jeans är ett måste i varje garderob. Med rak passform från höft till ankel erbjuder de en tidlös och mångsidig stil som passar alla tillfällen.' },
    { id: 4, name: 'Relaxed Fit Jeans', brand: 'Levis', price: 359, imageUrl: '/woman4.jpg', slug: 'relaxed-fit-jeans', description: 'Relaxed fit jeans med generös passform som ger extra utrymme över höft och lår – perfekt för dig som vill ha en avslappnad, bekväm stil utan att kompromissa med looken.' },
    { id: 5, name: 'Bootcut Jeans', brand: 'Levis', price: 429, imageUrl: '/woman5.jpg', slug: 'bootcut-jeans', description: 'Bootcut jeans är den perfekta balansen mellan klassiskt och modernt. Modellen är smal över höft och lår och lätt utsvängd från knäet – designad för att bäras över boots eller klackar.' },
    { id: 6, name: 'Skinny Black Jeans', brand: 'Levis', price: 299, imageUrl: '/woman6.jpg', slug: 'skinny-black-jeans', description: 'Snygga och mångsidiga skinny jeans i klassiskt svart – ett basplagg som passar till allt.' },
    { id: 7, name: 'Grey High-Waist Jeans', brand: 'Levis', price: 319, imageUrl: '/woman7.jpg', slug: 'grey-high-waist-jeans', description: 'Ge din denimlook en uppdatering med dessa grå jeans med hög midja. Jeansen har en smickrande passform som markerar midjan och förlänger benen.' },
    { id: 8, name: 'Blue Slim Fit Jeans', brand: 'Levis', price: 339, imageUrl: '/woman8.jpg', slug: 'blue-slim-fit-jeans', description: 'Dessa blå slim fit jeans kombinerar en modern silhuett med klassisk denimkänsla. Jeansen sitter smalt över höfter och lår.' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const slug = params.get('slug');
      this.product = this.allProducts.find(p => p.slug === slug || slug === decodeURIComponent(p.slug || ''));

      if (this.product) {
        this.similarProducts = this.allProducts
          .filter(p => p.id !== this.product?.id)
          .slice(0, 3);
      }
    });
  }

  addToCart(product: Product) {
    console.log('Tillagd i varukorgen:', product);
    alert(`${product.name} tillagd i varukorgen!`);
  }

  goToProduct(id: number) {
    const clickedProduct = this.allProducts.find(p => p.id === id);
    if (clickedProduct) {
      this.router.navigate(['/products', clickedProduct.slug]);
    }
  }
}
