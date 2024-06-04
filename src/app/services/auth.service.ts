import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8000/api/auth';

  constructor(private http: HttpClient) { }

  register(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/register/`;
    return this.http.post(url, { email, password });
  }

  login(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/login/`;
    return this.http.post(url, { email, password });
  }
}
