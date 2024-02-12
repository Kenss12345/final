import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderMobileComponent } from './header-mobile.component';


@NgModule({
  declarations: [HeaderMobileComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderMobileComponent]
})
export class HeaderMobileModule { }
