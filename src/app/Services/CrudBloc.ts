import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bloc } from '../Model/Bloc';
import { Observable } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})
export class CrudService {

    apiUrl = "http://localhost:8081/miniprojet";
    constructor(private http: HttpClient) { }
    addBloc(bloc: Bloc) {
        return this.http.post<any>(this.apiUrl + "/Bloc/add-Bloc", bloc, httpOptions);
    }
    deleteBloc(id: number) {
        const url = `${this.apiUrl + "/Bloc/remove-Bloc"}/${id}`
        return this.http.delete(url, httpOptions)
    }
    getBlocs() {
        return this.http.get<Bloc[]>(this.apiUrl + "/Bloc/retrieve-all-Blocs");
    }
    findBlocById(id: number): Observable<Bloc> {
        const url = `${this.apiUrl + "/Bloc/retrieve-Bloc/"}/${id}`;
        return this.http.get<Bloc>(url, httpOptions)
    }
    updateBloc(id: number, bloc: Bloc) {
        const url = `${this.apiUrl + "/Bloc/modify-Bloc"}/${id}`
        return this.http.put<any>(url, bloc);
    }
}
