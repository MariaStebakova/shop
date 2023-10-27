import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrdersRoutingModule } from './orders-routing.module';
import { ProcessOrderComponent } from './components/process-order/process-order.component';
import { EmailValidatorDirective } from './validators';


@NgModule({
  declarations: [
    ProcessOrderComponent,
    EmailValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
