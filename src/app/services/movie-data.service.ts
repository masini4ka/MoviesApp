import { Injectable } from '@angular/core';
import {movies} from './movie.mock-data';
import {Movie} from '../movie';
@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor() { }
  getMovies(): Movie[] {
    return movies;
  }
}
