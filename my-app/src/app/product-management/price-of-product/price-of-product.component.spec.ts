import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceOfProductComponent } from './price-of-product.component';

describe('PriceOfProductComponent', () => {
  let component: PriceOfProductComponent;
  let fixture: ComponentFixture<PriceOfProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceOfProductComponent]
    });
    fixture = TestBed.createComponent(PriceOfProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
