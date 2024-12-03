import { Injectable } from '@angular/core';
import { Product } from './product/product.model';
import { DataService } from './data.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: { [key: string]: Product } = {}
  updatedProduct = new Subject<{ [key: string]: Product }>()

  constructor(private dataService: DataService) {
  }

  productList() {
    return this.dataService.productList()
  }

  saveProduct(product: Product, key: string | null = null) {
    if (key === null) {
      this.addProduct(product)
    }
    else {
      this.editProduct(product, key)
    }
  }
  private addProduct(product: Product) {
    this.dataService.saveProduct(product).subscribe(() => {
      this.reloadList()
    })
  }

  private editProduct(product: Product, key: string) {
    this.dataService.editProduct(product, key).subscribe(() => {
      this.reloadList()
    })
  }

  getProductByKey(key: string): Product | undefined {
    return this.products[key]
  }

  deleteProduct(key: string) {
    this.dataService.deleteProduct(key).subscribe(() => {
      this.reloadList()
    })
  }

  private reloadList() {
    this.productList().subscribe((products: { [key: string]: Product }) => {
      this.setProducts(products)
    })
  }
  setProducts(products: { [key: string]: Product; }) {
    this.products = products
    this.updatedProduct.next(this.products)
  }
}


