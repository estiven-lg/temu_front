import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderDetail } from '../models/OrderDetail.model'; // importa tu modelo
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  private apiUrl = `http://localhost:5183/api/orderdetail`; // URL base de tu API

  constructor(private http: HttpClient) {}

  // Obtener todas las órdenes
  getAll(): Observable<OrderDetail[]> {
    return this.http.get<OrderDetail[]>(this.apiUrl);
  }

  // Obtener una orden por ID
  getById(id: number): Observable<OrderDetail> {
    return this.http.get<OrderDetail>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva orden
  create(order: OrderDetail): Observable<OrderDetail> {
    return this.http.post<OrderDetail>(this.apiUrl, order);
  }

  // Actualizar una orden existente
  update(id: number, order: OrderDetail): Observable<OrderDetail> {
    return this.http.put<OrderDetail>(`${this.apiUrl}/${id}`, order);
  }

  // Eliminar una orden
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Obtener detalles de orden por OrderId
  getByOrderId(orderId: number): Observable<OrderDetail[]> {
    return this.http.get<OrderDetail[]>(`${this.apiUrl}/byOrder/${orderId}`);
  }
}


