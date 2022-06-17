import { TestBed } from '@angular/core/testing';

import { SigninAuthenticationGuard } from './signin-authentication.guard';

describe('SigninAuthenticationGuard', () => {
  let guard: SigninAuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SigninAuthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
