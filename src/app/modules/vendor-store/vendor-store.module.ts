import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorStoreComponent } from './vendor-store.component';

@NgModule({
  declarations: [VendorStoreComponent],
  imports: [
    CommonModule
  ],
  exports: [VendorStoreComponent]
})
export class VendorStoreModule { }
