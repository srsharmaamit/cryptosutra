import { createReducer, on } from '@ngrx/store';
import { login, loginFailure, loginSuccess } from '@shared/action';
import { AuthState } from '@shared/states';

export const initialAuthState: AuthState = {
  userName: null,
  loginSuccess: false,
  loginError: null,
};

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state: AuthState, action) => {
    return {
      ...state,
      userName: action.userName,
    };
  }),
  on(loginSuccess, (state: AuthState, action) => {
    return {
      ...state,
      loginSuccess: action.loginSuccess,
      loginError: null,
    };
  }),
  on(loginFailure, (state: AuthState, action) => {
    return {
      ...state,
      loginSuccess: false,
      loginError: action.loginError,
    };
  })
);
