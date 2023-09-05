import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GamesComponent } from './pages/games/games/games.component';
import { GameComponent } from './pages/games/game/game.component';
import { GameCardComponent } from './pages/games/game-card/game-card.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'games', component: GamesComponent},
  {path: 'game', component: GameComponent},
  {path: 'gamecard', component: GameCardComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
