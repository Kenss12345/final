import { Routes } from '@angular/router';

import { RegisterComponent } from '../app/modules/register/register.component';
import { AccesComponent } from './modules/acces/acces.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { BecomeVendorComponent } from './modules/become-vendor/become-vendor.component';
import { VendorStoreComponent } from './modules/vendor-store/vendor-store.component';


export const routes: Routes = [
    { path: 'registro', component: RegisterComponent },
    { path: 'acceso', component: AccesComponent },
    { path: 'become', component: BecomeVendorComponent },
    { path: 'vendor', component: VendorStoreComponent },
  // Define otras rutas según sea necesario
  { path: '', redirectTo: '/home', pathMatch: 'full' },  //Ruta predeterminada
  { path: '**', component: HomeComponent }
  //{ path: '**', component: Error404Component } // Manejo de rutas no encontradas
];

