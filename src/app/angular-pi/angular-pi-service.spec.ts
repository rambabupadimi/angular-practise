import { TestBed } from '@angular/core/testing';

import { AngularPiService } from './angular-pi-service';

describe('AngularPiService', () => {
  let service: AngularPiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularPiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
