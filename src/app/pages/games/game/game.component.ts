import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGame } from 'src/app/interfaces/IGame';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{
  game: IGame = {
    id: 0,
    title :'',
    gameGenre: 1,
    releaseDate: 0,
    gameImgUrl: '',
    shortDescription: '',
    fullDescription: '',
    hoursPlayed: 0,
    rating: 0
  }  

  constructor(
    private service: GameService,
    private route: ActivatedRoute,
    private router: Router,
    ) {}


    ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(parseInt(id!)).subscribe(game => {
      this.game = game;
    })
  }

}
