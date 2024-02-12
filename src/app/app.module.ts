import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Importa el componente principal AppComponent

import { HeaderModule } from '../app/modules/header/header.module'; // Importa HeaderModule

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HeaderModule // Agrega HeaderModule a los imports
  ],
  providers: [],
})
export class AppModule { }