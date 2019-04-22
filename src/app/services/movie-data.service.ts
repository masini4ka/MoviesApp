import { Injectable } from '@angular/core';
import {movies} from './movie.mock-data';
import {Movie} from '../movie';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor() { }
  getMovies(): Observable<Movie[]> {
    return of(movies);
  }
  getMovie(id: number | string) {
    return this.getMovies().pipe(
      // (+) before `id` turns the string into a number
      map((x: Movie[]) => x.find(movie => movie.id === +id))
    );
  }
}
