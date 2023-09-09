import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { productPageTitleResolver } from '../core';
import { ProductComponent, ProductListComponent, ProductViewComponent } from '.';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    title: 'Products'
  },
  {
    path: 'product/:productID',
    component: ProductViewComponent,
    title: productPageTitleResolver
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
  static components = [ProductComponent, ProductListComponent, ProductViewComponent]
 }
