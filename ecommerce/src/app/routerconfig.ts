import {Routes} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {HomeComponent} from './home/home.component';



export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'products', loadChildren: () => import('./product/product.module')
      .then((m) => m.ProductModule ) },
  { path: 'productmanagement', loadChildren: () => import('./productmanagement/productmanagement.module')
      .then((m) => m.ProductmanagementModule ) },
  { path: 'registration', component: RegistrationComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];
