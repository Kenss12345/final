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
    RouterModule.forRoot([]), // Configura el enrutamiento principal
  ],
  providers: [],
})
export class AppModule { }