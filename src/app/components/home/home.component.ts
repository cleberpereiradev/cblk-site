import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from 'src/app/interfaces/IProfile';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profiles: IProfile[] = [];

  constructor(private service: ProfileService) {}

  ngOnInit(): void {
    this.service.showProfile().subscribe((result:IProfile[]) => {
      this.profiles = result;
    });
  }

}
