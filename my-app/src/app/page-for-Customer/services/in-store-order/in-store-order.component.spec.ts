import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InStoreOrderComponent } from './in-store-order.component';

describe('InStoreOrderComponent', () => {
  let component: InStoreOrderComponent;
  let fixture: ComponentFixture<InStoreOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InStoreOrderComponent]
    });
    fixture = TestBed.createComponent(InStoreOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
