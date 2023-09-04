import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroment/enviroment';
import { IProfile } from '../interfaces/IProfile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  endpoint = 'profiles';
  api = enviroment.api;

  constructor(private http: HttpClient) { }


  showProfile(): Observable<IProfile[]> {
    return this.http.get<IProfile[]>(`${this.api}/${this.endpoint}`);
  }
}
