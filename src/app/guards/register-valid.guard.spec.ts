import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RegisterValidGuard } from './register-valid.guard';

describe('RegisterValidGuard', () => {
  let guard: RegisterValidGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    guard = TestBed.inject(RegisterValidGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
