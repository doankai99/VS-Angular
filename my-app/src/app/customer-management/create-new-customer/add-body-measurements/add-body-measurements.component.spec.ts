import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBodyMeasurementsComponent } from './add-body-measurements.component';

describe('AddBodyMeasurementsComponent', () => {
  let component: AddBodyMeasurementsComponent;
  let fixture: ComponentFixture<AddBodyMeasurementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBodyMeasurementsComponent]
    });
    fixture = TestBed.createComponent(AddBodyMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
