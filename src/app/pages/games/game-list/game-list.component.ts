import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/app/interfaces/IGame';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: IGame[] = [];

  constructor(private service: GameService) {}

  ngOnInit(): void {
    this.service.listTopGames().subscribe((topGames:IGame[]) => {
      this.games = topGames;
    })
  }
}
