import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, concatMap, map, switchMap } from 'rxjs';
import { Action } from '@ngrx/store';

import { ProductsPromiseService } from 'src/app/product-list';
import * as ProductsActions from './products.actions';
import * as RouterActions from '../router/router.actions';

@Injectable()
export class ProductsEffects {

  getProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.getProducts),
      switchMap(action =>
        this.productsService.getProducts()
          .then(products => ProductsActions.getProductsSuccess({ products }))
          .catch(error => ProductsActions.getProductsError({ error }))
      )
    )
  );

  createProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.createProduct),
      map(action => action.product),
      concatMap(product =>
        this.productsService.createProduct(product)
          .then(product => ProductsActions.createProductSuccess({ product }))
          .catch(error => ProductsActions.createProductError({ error }))
      )
    )
  );

  updateProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.updateProduct),
      map(action => action.product),
      concatMap(product =>
        this.productsService.updateProduct(product)
          .then(product => ProductsActions.updateProductSuccess({ product }))
          .catch(error => ProductsActions.updateProductError({ error }))
      )
    )
  );

  createUpdateProductsSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.createProductSuccess, ProductsActions.updateProductSuccess),
      map(action => RouterActions.back())
    )
  );

  deleteProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.deleteProduct),
      map(action => action.product),
      concatMap(product =>
        this.productsService.deleteProduct(product.id)
          .then(() => ProductsActions.deleteProductSuccess({ product }))
          .catch(error => ProductsActions.deleteProductError({ error }))
      )
    )
  )

  constructor(
    private actions$: Actions,
    private productsService: ProductsPromiseService) { }
}
