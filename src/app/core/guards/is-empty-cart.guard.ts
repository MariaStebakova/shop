import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { map } from 'rxjs';

import { CartService } from 'src/app/cart-list';

export const isEmptyCartGuard: CanActivateFn = (route, state) => {
  const cartService = inject(CartService);
  return cartService.getProducts().pipe(
    map(items => !cartService.isEmptyCart(items))
  );
};
