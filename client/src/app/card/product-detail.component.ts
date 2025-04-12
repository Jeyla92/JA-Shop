import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from './product.model';
import { FeaturesComponent } from '../features/features.component'; // kontrollera sökvägen!
import { DataService } from '../service/DataService'; // kontrollera sökvägen!

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
  allProducts: Product[] = [];  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const slug = params.get('slug');
      this.dataService.getData('api/products').subscribe((data: any) => {
        this.allProducts = data;

        this.dataService.getData('api/products/' + slug || '').subscribe((productData: any) => {
          this.product = productData;

          if (this.product) {
            this.similarProducts = this.allProducts
            .filter(p => p.url_slug !== this.product?.url_slug)
            .slice(0, 3);
          }
        });
      });
    });
  }

  addToCart(product: Product) {
    alert(`${product.name} tillagd i varukorgen!`);
  }

  goToProduct(slug: string) {
    this.router.navigate(['/products', slug]).then(() => {
      window.scrollTo(0, 0);
    });
  }
  
    
   
  
}
