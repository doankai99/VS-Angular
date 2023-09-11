import { TestBed } from '@angular/core/testing';

import { ProfileCustomerService } from './profile-customer.service';

describe('ProfileCustomerService', () => {
  let service: ProfileCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
