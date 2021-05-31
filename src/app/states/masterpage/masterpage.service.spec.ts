import { TestBed } from '@angular/core/testing';

import { MasterpageService } from './masterpage.service';

describe('MasterpageService', () => {
  let service: MasterpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
