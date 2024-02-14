import { Routes } from '@angular/router';

import { RegisterComponent } from '../app/modules/register/register.component';
import { AccesComponent } from './modules/acces/acces.component';
import { Error404Component } from './pages/error404/error404.component';


export const routes: Routes = [
    { path: 'registro', component: RegisterComponent },
    { path: 'acceso', component: AccesComponent },
  // Define otras rutas según sea necesario
  { path: '', redirectTo: '/home', pathMatch: 'full' },  //Ruta predeterminada
  { path: '**', component: Error404Component } // Manejo de rutas no encontradas
];

