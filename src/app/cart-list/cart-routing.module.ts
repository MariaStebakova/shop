import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemComponent, CartListComponent } from './components';

const routes: Routes = [
  {
    path: 'cart',
    component: CartListComponent,
    title: 'Cart'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
  static components = [CartItemComponent, CartListComponent]
 }
