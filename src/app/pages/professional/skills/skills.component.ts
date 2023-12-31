import { ISkill } from './../../../interfaces/ISkill';
import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  
  skills: ISkill[] = [];

  constructor(private service: SkillService) {}

  ngOnInit(): void {
    this.service.listSkills().subscribe((skill: ISkill[]) => {
      this.skills = skill;
    })
  }

  changeDirection(index: number) :string{
    console.log(index);
    if(index % 2 == 0){
      return 'justify-left';
    }else{
      return 'justify-end';
    }
  }


}
