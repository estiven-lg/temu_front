import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListPanel } from './order-list-panel';

describe('OrderListPanel', () => {
  let component: OrderListPanel;
  let fixture: ComponentFixture<OrderListPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderListPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderListPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
