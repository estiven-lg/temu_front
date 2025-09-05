import { Component, Input } from '@angular/core';
import { Order } from '../models/Order.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-form-panel',
  imports: [CommonModule, FormsModule],
  templateUrl: './order-form-panel.html',
  styleUrl: './order-form-panel.css'
})
export class OrderFormPanel {
  @Input() order: Order | null = null;
  @Input() orderDetail: any = {
    id: null,
    orderId: null,
    productId: null,
    quantity: null,
    price: null,
    total: null,
    createdAt: null,
    updatedAt: null
  }

}
