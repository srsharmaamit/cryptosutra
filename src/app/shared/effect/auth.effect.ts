import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginFailure, loginSuccess } from '@shared/action';
import { of, switchMap, tap } from 'rxjs';
import { LoginService } from '@shared/service/login.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffect {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      switchMap(({ userName }) => {
        try {
          this.loginService.loginViaEmail(userName).then();
          return of(loginSuccess({ loginSuccess: true }));
        } catch (error) {
          return of(loginFailure({ loginError: error }));
        }
      })
    );
  });

  loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccess),
        tap(() => this.router.navigate(['/sutra']))
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router
  ) {}
}

// this.store.dispatch(loginSuccess({ loginSuccess: true }));
// this.store.dispatch(loginFailure({ loginError: error.message }));
