import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/app/shared';


export const getProducts = createAction(
  '[Products Page (App)] GET_PRODUCTS'
);
export const getProductsSuccess = createAction(
  '[Get Products Effect] GET_PRODUCTS_SUCCESS',
  props<{ products: ProductModel[] }>()
);
export const getProductsError = createAction(
  '[Get Products Effect] GET_PRODUCTS_ERROR',
  props<{ error: Error | string | null }>()
);

export const createProduct = createAction(
  '[Add/Edit Product Page] CREATE_PRODUCT',
  props<{ product: ProductModel }>()
);
export const createProductSuccess = createAction(
  '[Create Product Effect] CREATE_PRODUCT_SUCCESS',
  props<{ product: ProductModel }>()
);
export const createProductError = createAction(
  '[Create Product Effect] CREATE_PRODUCT_ERROR',
  props<{ error: Error | string | null }>()
);

export const updateProduct = createAction(
  '[Add/Edit Product Page] UPDATE_PRODUCT',
  props<{ product: ProductModel }>()
);
export const updateProductSuccess = createAction(
  '[Update Product Effect] UPDATE_PRODUCT_SUCCESS',
  props<{ product: ProductModel }>()
);
export const updateProductError = createAction(
  '[Update Product Effect] UPDATE_PRODUCT_ERROR',
  props<{ error: Error | string | null }>()
);

export const deleteProduct = createAction(
  '[Product List Page] DELETE_PRODUCT',
  props<{ product: ProductModel }>()
);
export const deleteProductSuccess = createAction(
  '[Delete Product Effect] DELETE_PRODUCT_SUCCESS',
  props<{ product: ProductModel }>()
);
export const deleteProductError = createAction(
  '[Delete Product Effect] DELETE_PRODUCT_ERROR',
  props<{ error: Error | string | null }>()
);
