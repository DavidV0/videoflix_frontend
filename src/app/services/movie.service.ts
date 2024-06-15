import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:8000/api/movies/';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getMovie(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${id}/`);
  }
}
