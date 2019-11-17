import { Injectable } from '@angular/core';
import {Product} from '../models/product';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PRODUCT_URL} from '../../config';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCT_URL);
  }
  public getProductById($id) {
  }
  public save(product: Product) {
  }
  public update(product: Product) {
  }
  public delete(product: Product) {
  }
}
