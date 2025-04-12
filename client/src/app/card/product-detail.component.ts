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
            .filter(p => p.id !== this.product?.id)
            .slice(0, 3);
          }
        });
      });
    });
  }

  addToCart(product: Product) {
    alert(`${product.name} tillagd i varukorgen!`);
  }

  goToProduct(id: number) {
    console.log(this);
    
    const clickedProduct = this.allProducts.find(p => p.id === id);
    if (clickedProduct) {      
      this.router.navigate(['/products', clickedProduct.url_slug]);
    }
  }
}
