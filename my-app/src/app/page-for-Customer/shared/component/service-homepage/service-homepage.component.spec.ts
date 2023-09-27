import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHomepageComponent } from './service-homepage.component';

describe('ServiceHomepageComponent', () => {
  let component: ServiceHomepageComponent;
  let fixture: ComponentFixture<ServiceHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceHomepageComponent]
    });
    fixture = TestBed.createComponent(ServiceHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
