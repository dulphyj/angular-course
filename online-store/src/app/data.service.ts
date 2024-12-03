import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product/product.model';
import { LoginService } from './login.service';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = environment.firebase.databaseURL
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService) { }

  token(key: string | null): string {
    const token = this.loginService.getIdToken()
    if (key === null) {
      return `${this.url}/data.json?auth=${token}`
    } else {
      return `${this.url}/data/${key}.json?auth=${token}`
    }
  }
  productList(): Observable<{ [key: string]: Product }> {
    return this.httpClient.get<{ [key: string]: Product }>(this.token(null))
  }

  saveProduct(product: Product): Observable<any> {
    return this.httpClient.post(this.token(null), product)
  }

  editProduct(product: Product, key: string): Observable<any> {
    const urlProduct = this.token(key)
    return this.httpClient.put(urlProduct, product)
  }

  deleteProduct(key: string): Observable<any> {
    const urlProduct = this.token(key)
    return this.httpClient.delete(urlProduct)
  }
}
