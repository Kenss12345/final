import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartComponent } from './shopping-cart.component';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule
  ],
  exports: [ShoppingCartComponent]
})
export class ShoppingCartModule { }
