import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmProductCustomerComponent } from './crm-product-customer.component';

describe('CrmProductCustomerComponent', () => {
  let component: CrmProductCustomerComponent;
  let fixture: ComponentFixture<CrmProductCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrmProductCustomerComponent]
    });
    fixture = TestBed.createComponent(CrmProductCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
