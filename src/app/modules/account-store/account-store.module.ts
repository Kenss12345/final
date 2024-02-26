import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountStoreComponent } from './account-store.component';

@NgModule({
  declarations: [AccountStoreComponent],
  imports: [
    CommonModule
  ],
  exports: [AccountStoreComponent]
})
export class AccountStoreModule { }
