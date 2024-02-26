import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',

  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  constructor( private router: Router) {}

  title = 'my-app';

  onRegister() {
    alert('La compra se ah realizado con éxito');

    this.router.navigate(['/accountshopping']);
  }

}
