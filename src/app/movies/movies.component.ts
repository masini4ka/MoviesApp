import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {MovieDataService} from '../services/movie-data.service';
import {MatButtonModule} from '@angular/material/button';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ParamMap} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass'],
  providers: [MovieDataService]
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movie[]>;
  selectedId: number;
  imagepath: any;
  searchText: string;
  constructor(private dataservice: MovieDataService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movies$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.dataservice.getMovies();
      }));
    this.imagepath = 'assets/images/movie-covers/';
    this.searchText = '';
  }

}
