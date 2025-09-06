import { Component, EventEmitter, Output } from '@angular/core';
import { Order } from '../models/Order.model';
import { OrderService } from '../services/order';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-detail-panel',
  imports: [CommonModule],
  templateUrl: './order-detail-panel.html',
  styleUrl: './order-detail-panel.css'
})
export class OrderDetailPanel {
  @Output() orderSelected = new EventEmitter<Order>();

  orders: Order[] = [];

  constructor(private orderService: OrderService) { }
  ngOnInit() {
    // Aquí puedes cargar los detalles de la orden si es necesario
    this.orderService.getAll().subscribe(orders => {
      console.log(orders);
      this.orders = orders;
    });
  }

  selectOrder(order: Order) {
    this.orderSelected.emit(order);
  }

  addOrder() {
    const newOrder: Order = {
      id: null, personId: null, number: null,
      person: undefined,
      createdAt: undefined,
      orderDetails: [],
    };
    this.orderSelected.emit(newOrder);
  }
}
