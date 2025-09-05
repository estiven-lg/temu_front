import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailPanel } from './order-detail-panel';

describe('OrderDetailPanel', () => {
  let component: OrderDetailPanel;
  let fixture: ComponentFixture<OrderDetailPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderDetailPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
