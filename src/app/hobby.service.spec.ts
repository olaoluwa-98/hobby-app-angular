import { TestBed, inject } from '@angular/core/testing';

import { HobbyService } from './hobby.service';

describe('HobbyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HobbyService]
    });
  });

  it('should ...', inject([HobbyService], (service: HobbyService) => {
    expect(service).toBeTruthy();
  }));
});
