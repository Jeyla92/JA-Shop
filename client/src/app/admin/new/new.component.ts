import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class NewComponent {
  productForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      brand: [''],
      image: [''],
      SKU: [''],
      price: [''],
    });
  }

  onSubmit(): void {
    if (this.productForm.invalid) return;

    const product = this.productForm.value;

    this.isSubmitting = true;
    this.http.post('/api/products', product).subscribe({
      next: (response: any) => {
        console.log('Product saved:', response);
        this.router.navigate(['/admin/list']);
      },
      error: (error) => {
        console.error('Error:', error);
        this.isSubmitting = false;
      },
    });
  }
}
