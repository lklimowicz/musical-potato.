import { TestBed, inject } from '@angular/core/testing';

import { PersonaltrainerService } from './personaltrainer.service';

describe('PersonaltrainerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonaltrainerService]
    });
  });

  it('should be created', inject([PersonaltrainerService], (service: PersonaltrainerService) => {
    expect(service).toBeTruthy();
  }));
});
