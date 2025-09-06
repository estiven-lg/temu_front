import { Component, Input } from '@angular/core';
import { Order } from '../models/Order.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../services/order';
import { OrderDetailService } from '../services/order-detail';
import { Person } from '../models/Person.model';
import { Item } from '../models/Item.model';
import { PersonService } from '../services/person';
import { ItemService } from '../services/item';

@Component({
  selector: 'app-order-form-panel',
  imports: [CommonModule, FormsModule],
  templateUrl: './order-form-panel.html',
  styleUrl: './order-form-panel.css'
})
export class OrderFormPanel {

  constructor(
    private orderService: OrderService,
    private orderDetailService: OrderDetailService,
    private personService: PersonService,
    private itemService: ItemService
  ) { }

  persons: Person[] = []
  items: Item[] = []

  ngOnInit() {

    this.personService.getAll().subscribe(persons => {
      console.log('Persons loaded:', persons);
      this.persons = persons;
    });

    this.itemService.getAll().subscribe(items => {
      console.log('Items loaded:', items);
      this.items = items;
    });

  }
  @Input() order: Order | null = null;
  @Input() orderDetail: any = {
    id: 0,
    orderId: 0,
    quantity: 0,
    price: 0,
    total: 0,
    createdAt: null,
    updatedAt: null
  }

  saveOrder() {
    if (this.order) {
      console.log('Guardando orden:', this.order);
      this.orderService.create(this.order).subscribe(createdOrder => {
        console.log('Orden creada:', createdOrder);
        alert('Orden creada con éxito');
        window.location.reload();
      });
    }
  }

  addOrderDetail() {
    if (this.orderDetail) {
      this.orderDetail.orderId = this.order?.id || null;
      console.log('Guardando detalle de la orden:', this.orderDetail);
      this.orderDetailService.create(this.orderDetail).subscribe(createdDetail => {
        console.log('Detalle de la orden creado:', createdDetail);
        alert('Detalle de la orden creado con éxito');
        window.location.reload();
      });
    }
  }

}
