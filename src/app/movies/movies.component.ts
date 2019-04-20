import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {MovieDataService} from '../services/movie-data.service';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass'],
  providers: [MovieDataService]
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  imagepath: any;
  searchText: string;
  constructor(private dataservice: MovieDataService) { }

  ngOnInit(): void {
    this.movies = this.dataservice.getMovies();
    this.imagepath = 'assets/images/movie-covers/';
    this.searchText = '';
  }

}
