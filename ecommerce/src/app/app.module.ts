import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {RegistrationComponent} from './registration/registration.component';
import {HomeComponent} from './home/home.component';

import {ProductService} from './product/services/product.service';
import {RegistrationService} from './services/registration.service';
import {ShoppingCartItemService} from './product/services/shopping-cart-item.service';

import {appRoutes} from './routerconfig';
import {SharedModule} from './shared/shared.module';
import { MyDecoratorPipe } from './my-decorator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    MyDecoratorPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService,
    RegistrationService,
    ShoppingCartItemService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
