import { TestBed } from '@angular/core/testing';

import { SocialMediaAccountsService } from './social-media-accounts.service';

describe('SocialMediaAccountsService', () => {
  let service: SocialMediaAccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialMediaAccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
