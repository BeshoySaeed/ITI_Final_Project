import { TestBed } from '@angular/core/testing';

import { BrancheServiceService } from './branche-service.service';

describe('BrancheServiceService', () => {
  let service: BrancheServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrancheServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
