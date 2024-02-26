import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-acces',

  templateUrl: './acces.component.html',
  styleUrl: './acces.component.css'
})
export class AccesComponent {

  constructor( private router: Router) {}

  title = 'my-app';

  onRegister() {
    alert('Entrando a la cuenta');

    this.router.navigate(['/accountwishlist']);
  }

}
