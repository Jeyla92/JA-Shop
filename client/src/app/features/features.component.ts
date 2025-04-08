import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="features">
      <div class="feature">
        <i class="fa-solid fa-globe"></i>
        <span>Gratis frakt och returer</span>
      </div>
      <div class="feature">
        <i class="fa-solid fa-plane"></i>
        <span>Expressfrakt</span>
      </div>
      <div class="feature">
        <i class="fa-solid fa-shield-halved"></i>
        <span>Säkra betalningar</span>
      </div>
      <div class="feature">
        <i class="fa-solid fa-face-smile"></i>
        <span>Nyheter varje dag</span>
      </div>
    </section>
  `,
  styles: [`
    .features {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 1.5rem;
      margin-top: 2rem; /* 👈 detta lägger avstånd efter korten */
      background-color: #fff;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      flex-wrap: wrap;
    }

    .feature {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.95rem;
      color: #333;
      padding: 0.5rem 1rem;
    }

    .feature i {
      font-size: 1.3rem;
      color: #111;
    }
  `]
})
export class FeaturesComponent {}
