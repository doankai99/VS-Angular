import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMyOrderComponent } from './customer-my-order.component';

describe('CustomerMyOrderComponent', () => {
  let component: CustomerMyOrderComponent;
  let fixture: ComponentFixture<CustomerMyOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerMyOrderComponent]
    });
    fixture = TestBed.createComponent(CustomerMyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
