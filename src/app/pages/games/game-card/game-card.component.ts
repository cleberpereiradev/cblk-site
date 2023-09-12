import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGame } from 'src/app/interfaces/IGame';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  games :IGame[] = [];

  constructor(private service: GameService) {}
  ngOnInit(): void {
    this.service.listGames().subscribe((result:IGame[]) => {
      this.games = result;
    });
  }
}
