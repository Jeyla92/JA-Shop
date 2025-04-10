import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  productForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(15)]],
      description: ['', [Validators.required, Validators.maxLength(50)]],
      urlToImage: ['', Validators.required],
      SKU: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z]{3}[0-9]{3}')],
      ],
      price: ['', [Validators.required, Validators.maxLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.productForm.invalid) return;

    const product = this.productForm.value;

    this.isSubmitting = true;
    this.http.post('/api/products', product).subscribe({
      next: (response: any) => {
        console.log('Product saved:', response);
        this.router.navigate(['/admin/products']);
      },
      error: (error) => {
        console.error('Error:', error);
        this.isSubmitting = false;
      },
    });
  }
}
