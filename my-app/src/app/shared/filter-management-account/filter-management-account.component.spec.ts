import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterManagementAccountComponent } from './filter-management-account.component';

describe('FilterManagementAccountComponent', () => {
  let component: FilterManagementAccountComponent;
  let fixture: ComponentFixture<FilterManagementAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterManagementAccountComponent]
    });
    fixture = TestBed.createComponent(FilterManagementAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
