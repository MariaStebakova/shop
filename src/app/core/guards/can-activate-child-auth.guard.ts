import { CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { AuthService } from '..';

export const canActivateChildAuthGuard: CanActivateChildFn = (childRoute, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.checkLogin(state.url) && authService.isAdmin) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
