import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from '../models/product';
import {ShoppingCartItem} from '../models/shopping-cart-item';
import {ShoppingCartItemService} from '../services/shopping-cart-item.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[];
  public productcolspan: number;
  public message: string;
  public galleryView: boolean;
  public searchProducts: Product[];
  public shoppingCart: ShoppingCartItem[];
  private productService: ProductService;
  private shoppingCartItemService: ShoppingCartItemService;
  constructor(productService: ProductService, shoppingCartItemService: ShoppingCartItemService) {
    this.shoppingCartItemService = shoppingCartItemService;
    this.productService = productService;
    this.productcolspan = 2;
    this.galleryView = true;
    this.searchProducts = [];
    this.shoppingCart = [];
  }

  ngOnInit() {
    // Subscribe can accept 3 functions (1)next (2)error handling (3)complete
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
    this.shoppingCartItemService.getShoppingCartItems().subscribe((shoppingCartItems: ShoppingCartItem[]) => {
      this.shoppingCart = shoppingCartItems;
    });
  }
  addToCart(shoppingCartItem: ShoppingCartItem) {
    this.shoppingCartItemService.save(shoppingCartItem).subscribe((data: ShoppingCartItem) => {
      this.shoppingCartItemService.getShoppingCartItems().subscribe((shoppingCartItems: ShoppingCartItem[]) => {
        this.shoppingCart = shoppingCartItems;
      });
    });
    this.message = 'Product successfully added!';
  }
  changeView() {
    this.galleryView = !this.galleryView;
  }
  doSearch(event: any) {
    const searchKey = event.target.value;
    if (searchKey !== '') {
      const regExp = new RegExp('^' + searchKey, 'i');
      this.searchProducts = this.products.filter((product) => {
        return regExp.test(product.name);
      });
    } else {
      this.searchProducts = [];
    }
  }
}
