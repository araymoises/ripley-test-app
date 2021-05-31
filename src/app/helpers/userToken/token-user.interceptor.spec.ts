import { TestBed } from '@angular/core/testing';

import { TokenUserInterceptor } from './token-user.interceptor';

describe('TokenUserInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenUserInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenUserInterceptor = TestBed.inject(TokenUserInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
