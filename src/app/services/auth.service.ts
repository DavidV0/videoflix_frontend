import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8000/api/auth';

  constructor(private http: HttpClient, private router: Router) { }

  register(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/register/`;
    return this.http.post(url, { email, password });
  }

  login(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/login/`;
    return this.http.post(url, { email, password });
  }


  requestPasswordReset(email: string): Observable<any> {
    const url = `${this.baseUrl}/password_reset/`;
    return this.http.post(url, { email });
  }

  confirmPasswordReset(uidb64: string | null, token: string | null, newPassword: string, confirmPassword: string): Observable<any> {
    const url = `${this.baseUrl}/password_reset/confirm/${uidb64}/${token}/`;
    return this.http.post(url, { newPassword, confirmPassword });
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
