import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeHotTodayComponent } from './home-hot-today.component';

@NgModule({
  declarations: [HomeHotTodayComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeHotTodayComponent]
})
export class HomeHotTodayModule { }
