import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteSupplierComponent } from './update-delete-supplier.component';

describe('UpdateDeleteSupplierComponent', () => {
  let component: UpdateDeleteSupplierComponent;
  let fixture: ComponentFixture<UpdateDeleteSupplierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDeleteSupplierComponent]
    });
    fixture = TestBed.createComponent(UpdateDeleteSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
