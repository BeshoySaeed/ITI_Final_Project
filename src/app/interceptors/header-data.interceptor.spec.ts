import { TestBed } from '@angular/core/testing';

import { HeaderDataInterceptor } from './header-data.interceptor';

describe('HeaderDataInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HeaderDataInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HeaderDataInterceptor = TestBed.inject(HeaderDataInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
