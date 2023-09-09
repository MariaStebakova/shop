import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent, AdminOrdersComponent, AdminProductFormComponent, AdminProductsComponent } from './components';
import { canActivateAuthGuard, canActivateChildAuthGuard } from '../core';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    title: 'Admin',
    canActivate: [canActivateAuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [canActivateChildAuthGuard],
        children: [
          { path: 'products', component: AdminProductsComponent },
          { path: 'product/add', component: AdminProductFormComponent },
          { path: 'products/edit/:productID', component: AdminProductFormComponent },
          { path: 'orders', component: AdminOrdersComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [AdminProductsComponent, AdminProductFormComponent, AdminOrdersComponent, AdminComponent];
}
