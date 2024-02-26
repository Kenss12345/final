import { Routes } from '@angular/router';

import { RegisterComponent } from '../app/modules/register/register.component';
import { AccesComponent } from './modules/acces/acces.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { BecomeVendorComponent } from './modules/become-vendor/become-vendor.component';
import { VendorStoreComponent } from './modules/vendor-store/vendor-store.component';
import { ShoppingCartComponent } from './modules/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';
import { StoreListComponent } from './modules/store-list/store-list.component';
import { AccountWishlistComponent } from './modules/account-wishlist/account-wishlist.component';
import { AccountShoppingComponent } from './modules/account-shopping/account-shopping.component';
import { AccountStoreComponent } from './modules/account-store/account-store.component';
import { AccountSalesComponent } from './modules/account-sales/account-sales.component';

export const routes: Routes = [
    { path: 'registro', component: RegisterComponent },
    { path: 'acceso', component: AccesComponent },
    { path: 'become', component: BecomeVendorComponent },
    { path: 'vendor', component: VendorStoreComponent },
    { path: 'shopping', component: ShoppingCartComponent },
    { path: 'error404', component: Error404Component },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'stores', component: StoreListComponent },
    { path: 'accountwishlist', component: AccountWishlistComponent },
    { path: 'accountshopping', component: AccountShoppingComponent },
    { path: 'accountstore', component: AccountStoreComponent },
    { path: 'accountsales', component: AccountSalesComponent },
  // Define otras rutas según sea necesario
  { path: '', redirectTo: '/home', pathMatch: 'full' },  //Ruta predeterminada
  { path: '**', component: HomeComponent }
  //{ path: '**', component: Error404Component } // Manejo de rutas no encontradas
];

