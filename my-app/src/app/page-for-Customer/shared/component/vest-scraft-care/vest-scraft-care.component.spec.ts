import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestScraftCareComponent } from './vest-scraft-care.component';

describe('VestScraftCareComponent', () => {
  let component: VestScraftCareComponent;
  let fixture: ComponentFixture<VestScraftCareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VestScraftCareComponent]
    });
    fixture = TestBed.createComponent(VestScraftCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
