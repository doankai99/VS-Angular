import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelAppoinmentComponent } from './cancel-appoinment.component';

describe('CancelAppoinmentComponent', () => {
  let component: CancelAppoinmentComponent;
  let fixture: ComponentFixture<CancelAppoinmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelAppoinmentComponent]
    });
    fixture = TestBed.createComponent(CancelAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
