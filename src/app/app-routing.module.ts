import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { GamesComponent } from './games/games.component';
import { GeneralComponent } from './general/general.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowsComponent } from './shows/shows.component';

const routes: Routes = [
  { path: 'Games', component: GamesComponent},
  { path: 'Movies', component: MoviesComponent},
  { path: 'Food', component:  FoodComponent},
  { path: 'General', component: GeneralComponent},
  { path: 'Shows', component: ShowsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
