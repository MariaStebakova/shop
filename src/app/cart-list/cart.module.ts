import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartListComponent } from './components/cart-list/cart-list.component';
import { SharedModule } from '../shared/shared.module';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
