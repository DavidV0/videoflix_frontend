import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://videoflix-api.david-velickovic.at/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  register(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/register/`;
    return this.http.post(url, { email, password });
  }

  login(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/login/`;
    return this.http.post(url, { email, password }).pipe(
      tap((response: any) => {
        // Assuming the response contains the token
        localStorage.setItem('authToken', response.token);
      })
    );
  }

  requestPasswordReset(email: string): Observable<any> {
    const url = `${this.baseUrl}/password_reset/`;
    return this.http.post(url, { email });
  }

  confirmPasswordReset(
    uidb64: string | null,
    token: string | null,
    newPassword: string,
    confirmPassword: string
  ): Observable<any> {
    const url = `${this.baseUrl}/password_reset/confirm/${uidb64}/${token}/`;
    return this.http.post(url, { newPassword, confirmPassword });
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
