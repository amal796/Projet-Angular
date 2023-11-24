
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foyer } from './foyer/foyer.model';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiUrl = 'http://localhost:8089/GestionFoyer/foyer/all'; 

  constructor(private http: HttpClient) {}

  getFoyers(): Observable<Foyer[]> {
    const headers =new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin': 'http://localhost:60992'});

    return this.http.get<Foyer[]>(this.apiUrl,{headers});
  }
  
}
