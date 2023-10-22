import { ProductModel } from "src/app/shared";

export interface ProductsState {
    data: ReadonlyArray<ProductModel>;
    loading: boolean;
    loaded: boolean;
    error: Error | string | null;
  }
  
  export const initialProductsState: ProductsState = {
      data: [],
      loading: false,
      loaded: false,
      error: null
  };
  