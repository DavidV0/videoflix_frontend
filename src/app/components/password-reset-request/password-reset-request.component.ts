import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-reset-request',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './password-reset-request.component.html',
  styleUrl: './password-reset-request.component.scss'
})
export class PasswordResetRequestComponent {
  resetRequestForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.resetRequestForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  requestReset(): void {
    if (this.resetRequestForm.valid) {
      const { email } = this.resetRequestForm.value;
      this.authService.requestPasswordReset(email).subscribe(
        (response) => {
          console.log('Password reset email sent', response);
          this.successMessage = 'Password reset email sent. Please check your email.';
          this.errorMessage = '';
        },
        (error) => {
          console.error('Password reset request error', error);
          this.errorMessage = 'Something went wrong. Please try again.';
          this.successMessage = '';
        }
      );
    }
  }

  get email() {
    return this.resetRequestForm.get('email');
  }
}
