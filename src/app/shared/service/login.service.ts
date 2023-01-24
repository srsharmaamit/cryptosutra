import { Injectable } from '@angular/core';
import { getAuth, sendSignInLinkToEmail } from '@angular/fire/auth';
import { AuthState } from '@shared/states';
import { Store } from '@ngrx/store';
import { ErrorLogService } from '@shared/service/error-log.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  actionCodeSettings: any;

  constructor(
    private store: Store<AuthState>,
    private errorLogService: ErrorLogService,
    private http: HttpClient
  ) {
    this.actionCodeSettings = {
      // URL you want to redirect back to
      url: 'https://vidhi.co.uk/sutra',
      // This must be true.
      handleCodeInApp: true,
    };
  }

  async loginViaEmail(email: string): Promise<void> {
    try {
      const auth = getAuth();
      await sendSignInLinkToEmail(auth, email, this.actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email);
    } catch (error: any) {
      this.errorLogService.logError(error);
    }
  }
}
