import { TestBed } from '@angular/core/testing';

import { TriftService } from './trift.service';

describe('GymService', () => {
  let service: TriftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
