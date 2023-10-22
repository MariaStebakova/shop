import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.state';
import { productsFeatureKey } from '../app.state';
import { ProductModel } from 'src/app/shared';
import { selectRouterState } from '../router/router.selectors';

export const selectProductsState = createFeatureSelector<ProductsState>(productsFeatureKey);

export const selectProductsData = createSelector(
    selectProductsState,
    (state: ProductsState) => state.data
);

export const selectProductsLoading = createSelector(
    selectProductsState,
    (state: ProductsState) => state.loading
);

export const selectProductsLoaded = createSelector(
    selectProductsState,
    (state: ProductsState) => state.loaded
);

export const selectProductsError = createSelector(
    selectProductsState,
    (state: ProductsState) => state.error
);

export const selectSelectedProductByUrl = createSelector(
    selectProductsData,
    selectRouterState,
    (products, router): ProductModel => {
        const productID = router.state.params['productID'];
        if (productID && Array.isArray(products)) {
            return products.find(prod => prod.id === +productID);
        } else {
            return new ProductModel();
        }
    }
);