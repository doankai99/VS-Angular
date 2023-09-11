import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpCustomerComponent } from './sign-up-customer.component';

describe('SignUpCustomerComponent', () => {
  let component: SignUpCustomerComponent;
  let fixture: ComponentFixture<SignUpCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpCustomerComponent]
    });
    fixture = TestBed.createComponent(SignUpCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
