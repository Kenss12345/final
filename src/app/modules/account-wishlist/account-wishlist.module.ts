import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountWishlistComponent } from './account-wishlist.component';

@NgModule({
  declarations: [AccountWishlistComponent],
  imports: [
    CommonModule
  ],
  exports: [AccountWishlistComponent]
})
export class AccountWishlistModule { }
