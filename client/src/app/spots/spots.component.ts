import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';        
import { RouterModule } from '@angular/router';        

@Component({
  selector: 'app-spots',
  standalone: true,
  imports: [CommonModule, RouterModule],               
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.scss']
})
export class SpotsComponent {
  spots = [
    {
      image: '/img/spot1.jpg',
      text: 'Shoppa jeans för vardag & fest',
      link: 'https://www.google.com'
    },
    {
      image: '/img/spot2.jpg',
      text: 'Upptäck jackor i vårens färger',
      link: 'https://www.google.com'
    },
    {
      image: '/img/spot3.jpg',
      text: 'Klicka här för trendiga t-shirts',
      link: 'https://www.google.com'
    }
  ];
  
  
}
