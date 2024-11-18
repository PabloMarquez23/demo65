import { TestBed } from '@angular/core/testing';

import { PerrosbfbService } from './perrosbfb.service';

describe('PerrosbfbService', () => {
  let service: PerrosbfbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerrosbfbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
