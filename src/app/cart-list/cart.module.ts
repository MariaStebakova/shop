import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartListComponent } from './components';

@NgModule({
  declarations: [ CartRoutingModule.components ],
  imports: [
    SharedModule,
    CartRoutingModule
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
