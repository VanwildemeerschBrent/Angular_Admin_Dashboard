import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  getMostPopularMovies(): Observable<object[]> {
    return this.http.get<object[]>(`${this.API_URL}/movies/popular`);
  }
}
