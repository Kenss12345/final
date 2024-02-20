import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTopCategoriesComponent } from './home-top-categories.component';

@NgModule({
  declarations: [HomeTopCategoriesComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeTopCategoriesComponent]
})
export class HomeTopCategoriesModule { }
