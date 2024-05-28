import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private apiUrl = 'http://localhost:8000/api/genres/';

  constructor(private http: HttpClient) { }

  getGenres(): Observable<any> {
      return this.http.get(this.apiUrl);
  }
}
