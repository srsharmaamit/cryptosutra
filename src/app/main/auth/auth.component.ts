import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFireAuth,
  AngularFireAuthModule,
} from '@angular/fire/compat/auth';
import { getAuth, sendSignInLinkToEmail } from '@angular/fire/auth';

@Component({
  selector: 'sutra-auth',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgOptimizedImage,
    AngularFireModule,
    AngularFireAuthModule,
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  authenticationForm = new FormGroup({
    userName: new FormControl('amit@gmail.com', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    password: new FormControl('asdfa', [Validators.required]),
  });
  actionCodeSettings = {
    // URL you want to redirect back to
    url: 'https://vidhi.co.uk/sutra',
    // This must be true.
    handleCodeInApp: true,
  };

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}

  async onAuthenticationSubmission() {
    if (this.authenticationForm.valid) {
      const { userName, password } = this.authenticationForm.value;
      try {
        const auth = getAuth();
        const response = await sendSignInLinkToEmail(
          auth,
          userName!,
          this.actionCodeSettings
        );
        window.localStorage.setItem('emailForSignIn', userName!);
      } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ' : ' + errorMessage);
      }
    } else {
      alert('Invalid Login !!');
    }
  }

  onLoginClick() {}

  getMonsterImageHeight() {
    const matched = this.breakpointObserver.isMatched('(max-width: 915px)');
    return matched ? 240 : 340;
  }
}
