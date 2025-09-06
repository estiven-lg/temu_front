import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/Person.model'; // importa tu modelo
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = `http://localhost:5183/api/person`; // URL base de tu API

  constructor(private http: HttpClient) {}

  // Obtener todas las personas
  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  // Obtener una persona por ID
  getById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva persona    
  create(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }

  // Actualizar una persona existente
  update(id: number, person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/${id}`, person);
  }

  // Eliminar una persona
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
