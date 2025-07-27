import { TestBed } from '@angular/core/testing';

import { DevopsService } from './devops.service';

describe('DevopsService', () => {
  let service: DevopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
