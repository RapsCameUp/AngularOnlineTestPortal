import { TestBed } from '@angular/core/testing';

import { NumericaltestService } from './numericaltest.service';

describe('NumericaltestService', () => {
  let service: NumericaltestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumericaltestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
