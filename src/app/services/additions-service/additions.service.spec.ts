import { TestBed } from '@angular/core/testing';

import { AdditionsService } from './additions.service';

describe('AdditionsService', () => {
  let service: AdditionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
