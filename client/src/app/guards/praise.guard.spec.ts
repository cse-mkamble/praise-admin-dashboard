import { TestBed } from '@angular/core/testing';

import { PraiseGuard } from './praise.guard';

describe('PraiseGuard', () => {
  let guard: PraiseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PraiseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
