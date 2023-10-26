import { TestBed } from '@angular/core/testing';

import { ApplicantsService } from './applicants.service';

describe('ApplicantsService', () => {
  let service: ApplicantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
