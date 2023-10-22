import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from '..';
import * as RouterActions from '../@ngrx/router/router.actions';

export const canActivateAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const store = inject(Store);
  if (authService.checkLogin(state.url) && authService.isAdmin) {
    return true;
  } else {
    store.dispatch(RouterActions.go({ path: ['/login'] }));
    return false;
  }
};
