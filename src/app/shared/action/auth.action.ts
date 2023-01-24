import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth Component] Login',
  props<{ userName: string }>()
);
export const loginSuccess = createAction(
  '[Auth Component] Login Success',
  props<{ loginSuccess: boolean }>()
);
export const loginFailure = createAction(
  '[Auth Component] Login Failure',
  props<{ loginError: any }>()
);
