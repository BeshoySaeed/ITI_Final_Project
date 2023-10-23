import { TestBed } from '@angular/core/testing';

import { CustomerServiceEmailsService } from './customer-service-emails.service';

describe('CustomerServiceEmailsService', () => {
  let service: CustomerServiceEmailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerServiceEmailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
