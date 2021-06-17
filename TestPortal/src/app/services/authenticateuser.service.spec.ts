import { TestBed } from '@angular/core/testing';

import { AuthenticateuserService } from './authenticateuser.service';

describe('AuthenticateuserService', () => {
  let service: AuthenticateuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticateuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
