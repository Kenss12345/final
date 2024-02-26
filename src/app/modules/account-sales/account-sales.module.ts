import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountSalesComponent } from './account-sales.component';

@NgModule({
  declarations: [AccountSalesComponent],
  imports: [
    CommonModule
  ],
  exports: [AccountSalesComponent]
})
export class AccountSalesModule { }
