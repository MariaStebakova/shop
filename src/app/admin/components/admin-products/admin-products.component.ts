import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectProductsData } from 'src/app/core/@ngrx';
import { ProductModel } from 'src/app/shared';
import * as ProductsActions from '../../../core/@ngrx/products/products.actions';
import * as RouterActions from '../../../core/@ngrx/router/router.actions';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products$!: Observable<readonly ProductModel[]>;
  productsError$!: Observable<Error | string | null>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.products$ = this.store.select(selectProductsData);
    this.store.dispatch(ProductsActions.getProducts());
  }

  onEditProduct(product: ProductModel): void {
    this.store.dispatch(RouterActions.go({ path: ['admin/products/edit', product.id], }));
  }

  onCreateProduct(): void {
    this.store.dispatch(RouterActions.go({ path: ['admin/product/add'] }));
  }

  onDeleteProduct(product: ProductModel): void {
    if (product.id) {
      this.store.dispatch(ProductsActions.deleteProduct({ product }));
    }
  }
}
