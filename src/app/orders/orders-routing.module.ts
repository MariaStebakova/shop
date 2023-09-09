import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { isEmptyCartGuard } from '../core';
import { ProcessOrderComponent } from './components';

const routes: Routes = [
  {
    path: 'order',
    canActivate: [isEmptyCartGuard],
    component: ProcessOrderComponent,
    title: "Process Order"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
