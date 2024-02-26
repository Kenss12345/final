import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountShoppingComponent } from './account-shopping.component';

@NgModule({
  declarations: [AccountShoppingComponent],
  imports: [
    CommonModule
  ],
  exports: [AccountShoppingComponent]
})
export class AccountShoppingModule { }
