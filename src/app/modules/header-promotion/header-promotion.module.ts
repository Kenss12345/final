import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderPromotionComponent } from './header-promotion.component';


@NgModule({
  declarations: [HeaderPromotionComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderPromotionComponent]
})
export class HeaderPromotionModule { }
