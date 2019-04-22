import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviedetailComponent} from './moviedetail/moviedetail.component';
import {MoviesComponent} from './movies/movies.component';
const routes: Routes = [
  { path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  { path: 'movies',  component: MoviesComponent, data: { animation: 'movies' } },
  { path: 'movie/:id', component: MoviedetailComponent, data: { animation: 'movie' } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
