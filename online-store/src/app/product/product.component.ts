import { Component, Input } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() product!: Product
  @Input() key!: string

  constructor(private router: Router) { }

  editProduct() {
    this.router.navigate(['edit', this.key])
  }
}
