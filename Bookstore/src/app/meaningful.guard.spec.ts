import { TestBed } from '@angular/core/testing';

import { MeaningfulGuard } from './meaningful.guard';

describe('MeaningfulGuard', () => {
  let guard: MeaningfulGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MeaningfulGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
