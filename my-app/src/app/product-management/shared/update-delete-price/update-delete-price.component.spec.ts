import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeletePriceComponent } from './update-delete-price.component';

describe('UpdateDeletePriceComponent', () => {
  let component: UpdateDeletePriceComponent;
  let fixture: ComponentFixture<UpdateDeletePriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDeletePriceComponent]
    });
    fixture = TestBed.createComponent(UpdateDeletePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
