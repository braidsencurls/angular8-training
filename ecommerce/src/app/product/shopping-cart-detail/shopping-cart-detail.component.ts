import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShoppingCartItemService} from '../services/shopping-cart-item.service';
import {ShoppingCartItem} from '../models/shopping-cart-item';

@Component({
  selector: 'app-shopping-cart-detail',
  templateUrl: './shopping-cart-detail.component.html',
  styleUrls: ['./shopping-cart-detail.component.css']
})
export class ShoppingCartDetailComponent implements OnInit {

  private route: ActivatedRoute;
  private shoppingCartItemId: number;
  private shoppingCartItem: ShoppingCartItem;
  private shoppingCartItemService: ShoppingCartItemService;
  constructor(route: ActivatedRoute, shoppingCartItemService: ShoppingCartItemService) {
    this.route = route;
    this.shoppingCartItemService = shoppingCartItemService;
    this.route.params.subscribe((data) => {
      this.shoppingCartItemId = data.id;
    });
  }

  ngOnInit() {
    this.shoppingCartItemService.getShoppingCartItemById(this.shoppingCartItemId).subscribe((data: ShoppingCartItem) => {
      this.shoppingCartItem = data;
    });
  }


}
