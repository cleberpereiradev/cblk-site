import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-professional-info',
  templateUrl: './professional-info.component.html',
  styleUrls: ['./professional-info.component.css']
})
export class ProfessionalInfoComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute) {}
  goBack(): void {
    // Verifica se a rota atual é realmente /games antes de navegar de volta
    if (this.route.snapshot.routeConfig?.path === '/professional') {
      this.router.navigate(['/']);
    }else{
      this.router.navigate(['/'])
    }
  }
}
