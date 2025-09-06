import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Item } from '../models/Item.model'; // importa tu modelo
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = `http://localhost:5183/api/item`; // URL base de tu API

  constructor(private http: HttpClient) {}

  // Obtener todas las órdenes
  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  // Obtener una item por ID
  getById(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva item
  create(order: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, order);
  }

  // Actualizar una item existente
  update(id: number, order: Item): Observable<Item> {
    return this.http.put<Item>(`${this.apiUrl}/${id}`, order);
  }

  // Eliminar una item
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
