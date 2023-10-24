import { TestBed } from '@angular/core/testing';

import { GenericServiceService } from './generic-service.service';

describe('GenericServiceService', () => {
  let service: GenericServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
