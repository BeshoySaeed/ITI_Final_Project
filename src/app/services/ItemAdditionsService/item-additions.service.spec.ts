import { TestBed } from '@angular/core/testing';

import { ItemAdditionsService } from './item-additions.service';

describe('ItemAdditionsService', () => {
  let service: ItemAdditionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemAdditionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
