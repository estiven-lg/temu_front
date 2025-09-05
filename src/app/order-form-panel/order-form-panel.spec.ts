import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormPanel } from './order-form-panel';

describe('OrderFormPanel', () => {
  let component: OrderFormPanel;
  let fixture: ComponentFixture<OrderFormPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderFormPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderFormPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
