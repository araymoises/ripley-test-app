import { TestBed } from '@angular/core/testing';

import { ContinuousImprovementFeedbacksService } from './continuous-improvement-feedbacks.service';

describe('ContinuousImprovementFeedbacksService', () => {
  let service: ContinuousImprovementFeedbacksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContinuousImprovementFeedbacksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
