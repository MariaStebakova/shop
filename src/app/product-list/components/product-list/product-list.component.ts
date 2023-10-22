import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { ProductModel } from "src/app/shared";
import { selectProductsData, selectProductsError } from "src/app/core/@ngrx";
import * as ProductsActions from '../../../core/@ngrx/products/products.actions';
import * as RouterActions from '../../../core/@ngrx/router/router.actions';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {

  products$!: Observable<readonly ProductModel[]>;
  productsError$!: Observable<Error | string | null>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.products$ = this.store.select(selectProductsData);
    this.productsError$ = this.store.select(selectProductsError);
    this.store.dispatch(ProductsActions.getProducts());
  }

  onViewProduct(product: ProductModel): void {
    this.store.dispatch(RouterActions.go({ path: ['/product', product.id] }));
  }
}
