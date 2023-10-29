import { TestBed } from '@angular/core/testing';

import { UserFavService } from './user-fav.service';

describe('UserFavService', () => {
  let service: UserFavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
