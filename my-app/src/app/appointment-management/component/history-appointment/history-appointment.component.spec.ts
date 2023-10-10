import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAppointmentComponent } from './history-appointment.component';

describe('HistoryAppointmentComponent', () => {
  let component: HistoryAppointmentComponent;
  let fixture: ComponentFixture<HistoryAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryAppointmentComponent]
    });
    fixture = TestBed.createComponent(HistoryAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
