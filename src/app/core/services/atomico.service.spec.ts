import { TestBed } from '@angular/core/testing';

import { AtomicoService } from './atomico.service';

describe('AtomicoService', () => {
  let service: AtomicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtomicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
