import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalOrderComponent } from './statistical-order.component';

describe('StatisticalOrderComponent', () => {
  let component: StatisticalOrderComponent;
  let fixture: ComponentFixture<StatisticalOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticalOrderComponent]
    });
    fixture = TestBed.createComponent(StatisticalOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
