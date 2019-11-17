import { Injectable } from '@angular/core';
import {ShoppingCartItem} from '../models/shopping-cart-item';
import {HttpClient} from '@angular/common/http';
import {SHOPPING_CART_URL} from '../../config';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartItemService {

  private  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  save(shoppingCartItem: ShoppingCartItem): Observable<ShoppingCartItem> {
    return this.http.post<ShoppingCartItem>(SHOPPING_CART_URL, shoppingCartItem);
  }
  getShoppingCartItems(): Observable<ShoppingCartItem[]> {
    return this.http.get<ShoppingCartItem[]>(SHOPPING_CART_URL);
  }
  getShoppingCartItemById(id: number): Observable<ShoppingCartItem> {
    return this.http.get<ShoppingCartItem>(SHOPPING_CART_URL + '/' + id);
  }
  update(id: number, shoppingCartItem: ShoppingCartItem) {
    return this.http.put<ShoppingCartItem>(SHOPPING_CART_URL + '/' + id, shoppingCartItem);
  }
  delete(id: number) {
    return this.http.delete<ShoppingCartItem>(SHOPPING_CART_URL + '/' + id);
  }
}
