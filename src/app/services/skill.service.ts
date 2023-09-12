import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroment/enviroment';
import { ISkill } from '../interfaces/ISkill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  api = enviroment.api;
  endpoint = 'skills'
  constructor(private http: HttpClient) { }

  listSkills(): Observable<ISkill[]> {
    return this.http.get<ISkill[]>(`${this.api}/${this.endpoint}`);
  }
}
