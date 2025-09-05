import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/Order.model'; // importa tu modelo
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = `http://localhost:5183/api/order`; // URL base de tu API

  constructor(private http: HttpClient) {}

  // Obtener todas las órdenes
  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  // Obtener una orden por ID
  getById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva orden
  create(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

  // Actualizar una orden existente
  update(id: number, order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.apiUrl}/${id}`, order);
  }

  // Eliminar una orden
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
