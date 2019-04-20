import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {MovieDataService} from '../services/movie-data.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass'],
  providers: [MovieDataService]
})
export class MoviesComponent implements OnInit {
  // movie: Movie = {
  //   id: 1,
  //   key: 'deadpool',
  //   name: 'Deadpool',
  //   description: 'A former S',
  //   // genres: [],
  //   rate: 8.6,
  //   length: '1hr 48mins',
  //   img: 'deadpool.jpg'
  // };
  movies: Movie[];
  constructor(private dataservice: MovieDataService) { }

  ngOnInit(): void {
    this.movies = this.dataservice.getMovies();
  }

}
