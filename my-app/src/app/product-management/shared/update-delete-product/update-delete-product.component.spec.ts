import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteProductComponent } from './update-delete-product.component';

describe('UpdateDeleteProductComponent', () => {
  let component: UpdateDeleteProductComponent;
  let fixture: ComponentFixture<UpdateDeleteProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDeleteProductComponent]
    });
    fixture = TestBed.createComponent(UpdateDeleteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
