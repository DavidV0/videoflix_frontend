import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'http://34.141.117.158/api/movies/';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getMovie(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${id}/`);
  }
}
