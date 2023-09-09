import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components';



@NgModule({
  declarations: [ ProductsRoutingModule.components ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
