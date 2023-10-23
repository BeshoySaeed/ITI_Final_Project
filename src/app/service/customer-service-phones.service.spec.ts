import { TestBed } from '@angular/core/testing';

import { CustomerServicePhonesService } from './customer-service-phones.service';

describe('CustomerServicePhonesService', () => {
  let service: CustomerServicePhonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerServicePhonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
