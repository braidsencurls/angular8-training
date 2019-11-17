import { Component, OnInit } from '@angular/core';
import {ShoppingCartItemService} from '../services/shopping-cart-item.service';
import {ShoppingCartItem} from '../models/shopping-cart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  private  shoppingCartItemService: ShoppingCartItemService;
  public shoppingCart: ShoppingCartItem[];
  constructor(shoppingCartItemService: ShoppingCartItemService) {
    this.shoppingCartItemService = shoppingCartItemService;
  }

  ngOnInit() {
    this.doList();
  }
  doList() {
    this.shoppingCartItemService.getShoppingCartItems().subscribe((shoppingCartItems: ShoppingCartItem[]) => {
      this.shoppingCart = shoppingCartItems;
    });
  }
  deleteShoppingCartItem(id: number) {
    this.shoppingCartItemService.delete(id).subscribe((data) => {
      this.doList();
    });
  }
  updateShoppingCartItem(shoppingCartItem: ShoppingCartItem, requiredQuantity: number) {
    shoppingCartItem.requiredQuantity = requiredQuantity;
    this.shoppingCartItemService.update(shoppingCartItem.id, shoppingCartItem).subscribe((data) => {
      this.doList();
    });
  }

}
