import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpManagementOrderComponent } from './pop-up-management-order.component';

describe('PopUpManagementOrderComponent', () => {
  let component: PopUpManagementOrderComponent;
  let fixture: ComponentFixture<PopUpManagementOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpManagementOrderComponent]
    });
    fixture = TestBed.createComponent(PopUpManagementOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
