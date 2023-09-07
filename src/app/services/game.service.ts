import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGame } from '../interfaces/IGame';
import { enviroment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  api = enviroment.api;
  endpoint = 'games';
  constructor(private http: HttpClient) { }

  listGames(): Observable<IGame[]> {
    return this.http.get<IGame[]>(`${this.api}/${this.endpoint}`);
  }

  findById(id: number): Observable<IGame> {
    return this.http.get<IGame>(`${this.api}/${this.endpoint}/${id}`);
  } 
}
