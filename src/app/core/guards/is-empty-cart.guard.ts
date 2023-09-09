import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { CartService } from 'src/app/cart-list';

export const isEmptyCartGuard: CanActivateFn = (route, state) => {
  const cartService = inject(CartService);
  return !cartService.isEmptyCart;
};
