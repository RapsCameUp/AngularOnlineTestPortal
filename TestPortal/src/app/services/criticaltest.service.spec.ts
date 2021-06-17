import { TestBed } from '@angular/core/testing';

import { CriticaltestService } from './criticaltest.service';

describe('CriticaltestService', () => {
  let service: CriticaltestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriticaltestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
