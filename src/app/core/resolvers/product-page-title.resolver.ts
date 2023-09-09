import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, map, of, take } from 'rxjs';

import { ProductService } from 'src/app/product-list';
import { ProductModel } from 'src/app/shared';

export const productPageTitleResolver: ResolveFn<string> = (route, state) => {
  const productService = inject(ProductService);
  const defaultTitle = "Product";
  if (!route.paramMap.has('productID')) {
    return of(defaultTitle);
  }

  const id = route.paramMap.get('productID')!;
  return productService.getProductById(+id).pipe(
    map((product: ProductModel | undefined) => product ? `${defaultTitle}: ${product.name}` : defaultTitle),
    take(1),
    catchError(() => defaultTitle)
  );
};
