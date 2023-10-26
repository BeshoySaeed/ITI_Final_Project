import { TestBed } from '@angular/core/testing';

import { UserPhoneService } from './user-phone.service';

describe('UserPhoneService', () => {
  let service: UserPhoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPhoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
