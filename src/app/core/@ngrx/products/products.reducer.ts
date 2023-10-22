import { createReducer, on } from '@ngrx/store';
import { initialProductsState } from './products.state';
import * as ProductsActions from './products.actions';


export const reducer = createReducer(
  initialProductsState,
  on(ProductsActions.getProducts, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(ProductsActions.getProductsSuccess, (state, { products }) => {
    const data = [ ...products ];
    return {
      ...state,
      data,
      loaded: true,
      loading: false
    }
  }),
  on(ProductsActions.getProductsError, (state, { error }) => {
    return {
      ...state,
      loaded: true,
      loading: false,
      error
    }
  }),
  on(ProductsActions.createProductSuccess, (state, { product }) => {
    const data = [...state.data, { ...product }];
    return {
      ...state,
      data
    }
  }),
  on(
    ProductsActions.createProductError,
    ProductsActions.updateProductError,
    ProductsActions.deleteProductError, (state, { error }) => {
      return {
        ...state,
        error
      }
  }),
  on(ProductsActions.updateProductSuccess, (state, { product }) => {
    const data = [ ...state.data ];
    const index = data.findIndex(p => p.id === product.id);
    data[index] = { ...product };
    return {
      ...state,
      data
    }
  }),
  on(ProductsActions.deleteProductSuccess, (state, { product }) => {
    const data = state.data.filter(p => p.id !== product.id);
    return {
      ...state,
      data
    }
  })
);

