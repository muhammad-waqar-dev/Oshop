import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './components/app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrderComponent } from './components/my-order/my-order.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrderComponent } from './components/admin/admin-order/admin-order.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'admin/orders',component:AdminOrderComponent},
      {path:'admin/products',component:AdminProductsComponent},
      {path:'products',component:ProductsComponent},
      {path:'nav',component:NavComponent},
      {path:'my/orders',component:MyOrderComponent},
      {path:'order-success',component:OrderSuccessComponent},
      {path:'check-out',component:CheckOutComponent},
      {path:'shopping-cart',component:ShoppingCartComponent},
      {path:'login',component:LoginComponent}

    ])
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
