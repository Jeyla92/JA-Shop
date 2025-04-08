import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// 👇 Lägg till interfacet här:
interface Product {
  id?: number;
  name: string;
  brand: string;
  price: string;
  description: string;
  image: string;
  SKU: string;
  published_date: string;
  categories: string[];
  url_slug: string;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  query: string = '';
  products: Product[] = [];
  isLoading: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.query = params.get('query') || '';
      this.searchProducts(this.query);
    });
  }

  searchProducts(query: string) {
    this.isLoading = true;
    this.http
      .get<Product[]>(`/api/products?search=${query}`)
      .subscribe((data) => {
        this.products = data;
        this.isLoading = false;
      });
  }
}
