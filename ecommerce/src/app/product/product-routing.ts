import {Routes} from '@angular/router';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ShoppingCartDetailComponent} from './shopping-cart-detail/shopping-cart-detail.component';
import {ProductsComponent} from './products/products.component';


export const appRoutes: Routes = [
  { path: '', component: ProductsComponent, pathMatch: 'full'},
  { path: 'shoppingcart', component: ShoppingCartComponent},
  { path: 'shoppingcartdetail/:id', component: ShoppingCartDetailComponent}
];
