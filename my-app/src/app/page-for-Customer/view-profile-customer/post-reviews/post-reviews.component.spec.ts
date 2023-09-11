import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostReviewsComponent } from './post-reviews.component';

describe('PostReviewsComponent', () => {
  let component: PostReviewsComponent;
  let fixture: ComponentFixture<PostReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostReviewsComponent]
    });
    fixture = TestBed.createComponent(PostReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
