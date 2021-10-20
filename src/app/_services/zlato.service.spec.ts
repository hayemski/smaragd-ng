import { TestBed } from '@angular/core/testing';

import { ZlatoService } from './zlato.service';

describe('ZlatoService', () => {
  let service: ZlatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZlatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
