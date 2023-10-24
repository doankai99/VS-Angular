import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackProductComponent } from './feedback-product.component';

describe('FeedbackProductComponent', () => {
  let component: FeedbackProductComponent;
  let fixture: ComponentFixture<FeedbackProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackProductComponent]
    });
    fixture = TestBed.createComponent(FeedbackProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
