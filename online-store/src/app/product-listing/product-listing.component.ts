import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Product } from '../product/product.model';
import { FormsModule } from '@angular/forms';
import { FormComponent } from "../form/form.component";
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-listing',
  imports: [ProductComponent, FormsModule, FormComponent],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.css'
})
export class ProductListingComponent {

  products: { [key: string]: Product } = {}
  productSubscription: Subscription | null = null

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.loadProducts()
    this.productSubscription = this.productService.updatedProduct.subscribe((products) => {
      this.products = products
    })
  }
  loadProducts() {
    this.productService.productList().subscribe((products: { [key: string]: Product }) => {
      this.products = products
      this.productService.setProducts(products)
    })
  }

  getKeys(): string[] {
    if (this.products) {
      return Object.keys(this.products)
    }
    return []
  }

  addProduct() {
    this.router.navigate(['add'])
  }

  ngOnDestroy(): void {
    if (this.productSubscription != null) {
      this.productSubscription.unsubscribe()
    }
  }

}
