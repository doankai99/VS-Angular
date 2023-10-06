import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConfirmOrderInactiveComponent } from './edit-confirm-order-inactive.component';

describe('EditConfirmOrderInactiveComponent', () => {
  let component: EditConfirmOrderInactiveComponent;
  let fixture: ComponentFixture<EditConfirmOrderInactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditConfirmOrderInactiveComponent]
    });
    fixture = TestBed.createComponent(EditConfirmOrderInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
