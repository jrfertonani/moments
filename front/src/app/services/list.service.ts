import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiURL = 'http://localhost:4200/animals';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiURL);
  }

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== animal.name);
  }
}
