import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewletterComponent } from './newletter.component';



@NgModule({
  declarations: [NewletterComponent],
  imports: [
    CommonModule
  ],
  exports: [NewletterComponent]
})
export class NewletterModule { }
