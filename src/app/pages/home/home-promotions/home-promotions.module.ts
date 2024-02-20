import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePromotionsComponent } from './home-promotions.component';

@NgModule({
  declarations: [HomePromotionsComponent],
  imports: [
    CommonModule
  ],
  exports: [HomePromotionsComponent]
})
export class HomePromotionsModule { }
