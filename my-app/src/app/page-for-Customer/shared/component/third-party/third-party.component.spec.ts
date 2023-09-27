import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyComponent } from './third-party.component';

describe('ThirdPartyComponent', () => {
  let component: ThirdPartyComponent;
  let fixture: ComponentFixture<ThirdPartyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdPartyComponent]
    });
    fixture = TestBed.createComponent(ThirdPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
