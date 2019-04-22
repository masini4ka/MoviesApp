import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Movie} from '../movie';
import {MovieDataService} from '../services/movie-data.service';
@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.sass'],
  providers: [MovieDataService]
})
export class MoviedetailComponent implements OnInit {
  movies$: Observable<Movie>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MovieDataService
  ) { }

  ngOnInit() {
    this.movies$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getMovie(params.get('id')))
    );
  }
  gotoMovies(movie: Movie) {
    let movieid = movie ? movie.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/movies', { id: movieid, foo: 'foo' }]);
  }

}
