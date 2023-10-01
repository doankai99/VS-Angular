import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingBodyMeasurementComponent } from './setting-body-measurement.component';

describe('SettingBodyMeasurementComponent', () => {
  let component: SettingBodyMeasurementComponent;
  let fixture: ComponentFixture<SettingBodyMeasurementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingBodyMeasurementComponent]
    });
    fixture = TestBed.createComponent(SettingBodyMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
