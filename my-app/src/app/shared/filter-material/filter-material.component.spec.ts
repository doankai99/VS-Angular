import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMaterialComponent } from './filter-material.component';

describe('FilterMaterialComponent', () => {
  let component: FilterMaterialComponent;
  let fixture: ComponentFixture<FilterMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterMaterialComponent]
    });
    fixture = TestBed.createComponent(FilterMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
