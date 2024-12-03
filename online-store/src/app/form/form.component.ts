import { Component } from '@angular/core';
import { Product } from '../product/product.model';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  keyProduct: string | null = null
  descriptionInput: string = ''
  priceInput: number | null = null

  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const key = this.activatedRoute.snapshot.paramMap.get('key')
    if (key) {
      const product = this.productService.getProductByKey(key)
      if (product) {
        this.keyProduct = key
        this.descriptionInput = product.description
        this.priceInput = product.price
      }
    }
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.descriptionInput.trim() === '' || this.priceInput == null || this.priceInput <= 0) {
      console.log('Invalid input')
      return
    } else {
      const product = new Product(this.descriptionInput, this.priceInput)
      this.productService.saveProduct(product, this.keyProduct)
      this.cleanForm()
    }
  }

  deleteProduct() {
    if (this.keyProduct !== null) {
      this.productService.deleteProduct(this.keyProduct)
      this.cleanForm()
    }
  }

  private cleanForm() {
    this.keyProduct = null
    this.descriptionInput = ''
    this.priceInput = null
    this.cancel()
  }

  cancel() {
    this.router.navigate(['/'])
  }
}
