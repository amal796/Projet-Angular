import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foyer } from './foyer/foyer.model';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiUrl = 'http://localhost:8089/GestionFoyer/foyer/all'; // Endpoint pour récupérer les foyers

  constructor(private http: HttpClient) {}

  getFoyers(): Observable<Foyer[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:58822'});

    return this.http.get<Foyer[]>(this.apiUrl, { headers });
  }

  ajouterFoyer(foyer: Foyer): Observable<Foyer> {
    const ajouterEndpoint = 'http://localhost:8089/GestionFoyer/foyer/add'; // Endpoint pour ajouter un foyer
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:53752'
    });

    return this.http.post<Foyer>(ajouterEndpoint, foyer, { headers });
  }

  supprimerFoyer(idFoyer: number): Observable<void> {
    const supprimerEndpoint = `http://localhost:8089/GestionFoyer/foyer/delete/${idFoyer}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:53752'
    });

    return this.http.delete<void>(supprimerEndpoint, { headers });
  }

  getFoyerById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  
}
