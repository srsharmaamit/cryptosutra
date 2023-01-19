import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  authenticationForm = new FormGroup({
    userName: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router) {}

  async onAuthenticationSubmission() {
    const { userName, password } = this.authenticationForm.value;
    if (userName === 'amit') {
      await this.router.navigate(['/sutra']);
    }
  }

  onLoginClick() {}
}
