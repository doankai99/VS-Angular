import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentActiveInactiveComponent } from './appointment-active-inactive.component';

describe('AppointmentActiveInactiveComponent', () => {
  let component: AppointmentActiveInactiveComponent;
  let fixture: ComponentFixture<AppointmentActiveInactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentActiveInactiveComponent]
    });
    fixture = TestBed.createComponent(AppointmentActiveInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
