import { TestBed } from '@angular/core/testing';

import { Ud33ServiceService } from './ud33-service.service';

describe('Ud33ServiceService', () => {
  let service: Ud33ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ud33ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
