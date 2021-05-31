import { TestBed } from '@angular/core/testing';

import { UserInstitutionsService } from './user-institutions.service';

describe('UserInstitutionsService', () => {
  let service: UserInstitutionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInstitutionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
