import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {MovieDataService} from '../services/movie-data.service';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass'],
  providers: [MovieDataService]
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movie[]>;
  filtered: Observable<Movie[]>;
  selectedId: number;
  selected: any;
  genres: string[];
  imagepath: any;
  searchText: string;
  constructor(private dataservice: MovieDataService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getMovies();
    this.imagepath = 'assets/images/movie-covers/';
    this.genres = ['action' , 'adventure' , 'biography' , 'comedy' , 'crime'
     , 'drama' , 'history' , 'mystery' , 'scifi' , 'sport', 'thriller'];
    if (this.route.snapshot.queryParamMap.has('searchParams')) {
      this.searchText = this.route.snapshot.queryParamMap.get('searchParams');
    } else {
      this.searchText = '';
    }
    if (this.route.snapshot.queryParamMap.has('genre')) {
      this.selected = this.route.snapshot.queryParamMap.get('genre');
      this.onOptionsSelected(this.selected);
    }
  }
  getMovies(): Observable<Movie[]> {
    return this.movies$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        this.onOptionsSelected(params.get('genre'));
        this.selected = params.get('genre');
        return this.dataservice.getMovies();
      }));
  }
  onOptionsSelected(name: string)  {
    if (name != null) {
      this.filtered = this.movies$  = this.dataservice.getMovies().pipe(
        map((movies: Movie[]) => movies.filter(p => p.genres.includes(name)))
      );
      this.selected = name;
      this.router.navigate(['/movies'], { queryParams: { genre: this.selected}, queryParamsHandling: 'merge'});
    }
  }
  onSearch()  {
    this.router.navigate(['/movies'], { queryParams: { searchParams: this.searchText}, queryParamsHandling: 'merge'});

  }

}
