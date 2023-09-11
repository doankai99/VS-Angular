import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileCustomerComponent } from './view-profile-customer.component';

describe('ViewProfileCustomerComponent', () => {
  let component: ViewProfileCustomerComponent;
  let fixture: ComponentFixture<ViewProfileCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProfileCustomerComponent]
    });
    fixture = TestBed.createComponent(ViewProfileCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
