import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoveTechniqueComponent } from './learn-move-technique.component';

describe('LearnMoveTechniqueComponent', () => {
  let component: LearnMoveTechniqueComponent;
  let fixture: ComponentFixture<LearnMoveTechniqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnMoveTechniqueComponent]
    });
    fixture = TestBed.createComponent(LearnMoveTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
