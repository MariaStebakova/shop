import { CanActivateChildFn } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthService } from '..';
import * as RouterActions from '../@ngrx/router/router.actions';

export const canActivateChildAuthGuard: CanActivateChildFn = (childRoute, state) => {
  const authService = inject(AuthService);
  const store = inject(Store);
  if (authService.checkLogin(state.url) && authService.isAdmin) {
    return true;
  } else {
    store.dispatch(RouterActions.go({ path: ['/login'] }));
    return false;
  }
};
