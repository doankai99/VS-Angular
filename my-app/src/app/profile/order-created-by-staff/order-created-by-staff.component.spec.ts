import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCreatedByStaffComponent } from './order-created-by-staff.component';

describe('OrderCreatedByStaffComponent', () => {
  let component: OrderCreatedByStaffComponent;
  let fixture: ComponentFixture<OrderCreatedByStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderCreatedByStaffComponent]
    });
    fixture = TestBed.createComponent(OrderCreatedByStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
