import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorToDoorComponent } from './door-to-door.component';

describe('DoorToDoorComponent', () => {
  let component: DoorToDoorComponent;
  let fixture: ComponentFixture<DoorToDoorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoorToDoorComponent]
    });
    fixture = TestBed.createComponent(DoorToDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
