import { TestBed } from '@angular/core/testing';

import { SharedpriceService } from './sharedprice.service';

describe('SharedpriceService', () => {
  let service: SharedpriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedpriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
