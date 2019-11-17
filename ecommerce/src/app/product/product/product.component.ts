import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShoppingCartItem} from '../models/shopping-cart-item';
import {Product} from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  public product: Product;
  @Input()
  public view: string;
  @Input()
  public counter: number;
  @Output()
  public notify: EventEmitter<ShoppingCartItem> = new EventEmitter<ShoppingCartItem>();
  constructor() {
    this.view = 'gallery';
  }

  ngOnInit() {
  }
  addToCart(product: Product, quantity: number) {
    this.notify.emit(new ShoppingCartItem(0, product, quantity));
  }

}
