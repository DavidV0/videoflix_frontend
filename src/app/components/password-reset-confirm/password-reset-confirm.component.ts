import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-password-reset-confirm',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './password-reset-confirm.component.html',
  styleUrl: './password-reset-confirm.component.scss',
})
export class PasswordResetConfirmComponent {
  resetConfirmForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.resetConfirmForm = this.fb.group({
      newPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(60),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
    });
  }

  resetPassword(): void {
    if (this.resetConfirmForm.valid) {
      const { newPassword, confirmPassword } = this.resetConfirmForm.value;
      const uidb64 = this.route.snapshot.paramMap.get('uidb64');
      const token = this.route.snapshot.paramMap.get('token');
      this.authService
        .confirmPasswordReset(uidb64, token, newPassword, confirmPassword)
        .subscribe(
          (response) => {
            this.successMessage =
              'Password reset successful. You can now log in with your new password.';
            this.errorMessage = '';
          },
          (error) => {
            this.errorMessage = 'Something went wrong. Please try again.';
            this.successMessage = '';
          }
        );
    }
  }

  get newPassword() {
    return this.resetConfirmForm.get('newPassword');
  }

  get confirmPassword() {
    return this.resetConfirmForm.get('confirmPassword');
  }
}
