import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Importa el componente principal AppComponent



import { RouterModule } from '@angular/router'; // Importa RouterModule para el enrutamiento

import { environment } from '../environments/environment';

import { HeaderModule } from '../app/modules/header/header.module'; // Importa HeaderModule
import { RegisterModule } from '../app/modules/register/register.module'; // Importa el módulo de registro
import { AccesModule } from './modules/acces/acces.module';
import { HomeModule } from './pages/home/home.module';
import { BecomeVendorModule } from './modules/become-vendor/become-vendor.module';
import { VendorStoreModule } from './modules/vendor-store/vendor-store.module';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';
import { Error404Module } from './pages/error404/error404.module';
import { CheckoutModule } from './modules/checkout/checkout.module';
import { StoreListModule } from './modules/store-list/store-list.module';
import { AccountWishlistModule } from './modules/account-wishlist/account-wishlist.module';
import { AccountSalesModule } from './modules/account-sales/account-sales.module';
import { AccountShoppingModule } from './modules/account-shopping/account-shopping.module';
import { AccountStoreModule } from './modules/account-store/account-store.module';


@NgModule({
  declarations: [],
  imports: [

    BrowserModule,
    HeaderModule, // Agrega HeaderModule a los imports
    RegisterModule, // Agrega el módulo de registro aquí
    AccesModule,
    HomeModule,
    BecomeVendorModule,
    VendorStoreModule,
    ShoppingCartModule,
    Error404Module,
    CheckoutModule,
    StoreListModule,
    AccountWishlistModule,
    AccountSalesModule,
    AccountShoppingModule,
    AccountStoreModule,
    RouterModule.forRoot([]), // Configura el enrutamiento principal
  ],
  providers: [],
})
export class AppModule { }