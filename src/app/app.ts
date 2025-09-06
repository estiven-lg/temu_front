import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { OrderListPanel } from './order-list-panel/order-list-panel';
import { OrderFormPanel } from './order-form-panel/order-form-panel';
import { OrderDetailPanel } from './order-detail-panel/order-detail-panel';
import { Order } from './models/Order.model';
import { OrderDetailService } from './services/order-detail';

@Component({
  selector: 'app-root',
  imports: [OrderListPanel, OrderFormPanel, OrderDetailPanel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private orderDetailService: OrderDetailService) { }

  selectedOrder: Order | null = null;
  selectedOrderDetail: any = null;

  onOrderSelected(order: Order) {
    console.log('Orden seleccionada en App:', order);
    this.selectedOrder = order;
    this.orderDetailService.getByOrderId(order.id!).subscribe(details => {
      console.log('Detalles de la orden:', details);
      this.selectedOrderDetail = details;
    });
  }
}
