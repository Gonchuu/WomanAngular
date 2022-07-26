import { TestBed } from '@angular/core/testing';

import { WomansService } from './womans.service';

describe('WomansService', () => {
  let service: WomansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
