import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './pages/games/game/game.component';
import { GamesComponent } from './pages/games/games/games.component';
import { GameCardComponent } from './pages/games/game-card/game-card.component';
import { GameListComponent } from './pages/games/game-list/game-list.component';
import { GameHeaderComponent } from './pages/games/game-header/game-header.component';
import { ProfessionalInfoComponent } from './pages/professional/professional-info/professional-info.component';
import { SkillsComponent } from './pages/professional/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GameComponent,
    GamesComponent,
    GameCardComponent,
    GameListComponent,
    GameHeaderComponent,
    ProfessionalInfoComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
