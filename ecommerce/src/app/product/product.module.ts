import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {appRoutes} from './product-routing';

import {ProductComponent} from './product/product.component';
import {ProductsComponent} from './products/products.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ShoppingCartDetailComponent} from './shopping-cart-detail/shopping-cart-detail.component';
import {ProductService} from './services/product.service';
import {ShoppingCartItemService} from './services/shopping-cart-item.service';



@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ShoppingCartDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(appRoutes)
  ],
  providers: [
    ProductService,
    ShoppingCartItemService
  ],
})
export class ProductModule { }
