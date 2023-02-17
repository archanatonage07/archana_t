import { TestBed } from '@angular/core/testing';

import { Meaningful1Guard } from './meaningful1.guard';

describe('Meaningful1Guard', () => {
  let guard: Meaningful1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Meaningful1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
