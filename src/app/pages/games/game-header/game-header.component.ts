import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.css']
})
export class GameHeaderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    
  }

  goBack(): void {
    // Verifica se a rota atual é realmente /games antes de navegar de volta
    if (this.route.snapshot.routeConfig?.path === 'games') {
      this.router.navigate(['/']);
    }else{
      this.router.navigate(['/games'])
    }
  }
}