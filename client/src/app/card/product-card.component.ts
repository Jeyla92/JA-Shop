import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';     
import { RouterModule } from '@angular/router';     
import { Product } from '../card/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../service/DataService';

@Component({
  selector: 'app-product-card',
  standalone: true, // ✅ VIKTIGT! Gör komponenten standalone
  imports: [CommonModule, RouterModule], // ✅ Importera moduler för ngFor och routerLink
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})



export class ProductCardComponent {

constructor(private dataService: DataService) {}

ngOnInit(): void {
  this.dataService.getData('api/products').subscribe((data: any) => {
    this.products = data;
  });
}

  products: any
}
