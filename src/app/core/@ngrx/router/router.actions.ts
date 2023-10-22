import { createAction, props } from '@ngrx/store';
import { type NavigationExtras } from '@angular/router';

export const forward = createAction('[Router] FORWARD');
export const back = createAction('[Router] BACK');
export const goHome = createAction('[Router] GO_HOME');
export const go = createAction(
  '[Router] GO',
  props<{ path: any[]; queryParams?: object; extras?: NavigationExtras }>()
);
