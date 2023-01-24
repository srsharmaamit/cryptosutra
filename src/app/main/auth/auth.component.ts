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
import { Store } from '@ngrx/store';
import { login, loginFailure } from '@shared/action';
import { AuthState } from '@shared/states';

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
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private store: Store<AuthState>
  ) {}

  async onAuthenticationSubmission() {
    const { userName, password } = this.authenticationForm.value;
    if (this.authenticationForm.valid && userName) {
      try {
        this.store.dispatch(login({ userName }));
      } catch (error: any) {
        this.store.dispatch(loginFailure({ loginError: error.message }));
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
