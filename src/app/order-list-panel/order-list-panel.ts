import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-order-list-panel',
  imports: [CommonModule],
  templateUrl: './order-list-panel.html',
  styleUrl: './order-list-panel.css'
})
export class OrderListPanel {
  @Input() orderDetails: any[] = [];

}
