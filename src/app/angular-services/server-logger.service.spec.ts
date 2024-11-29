import { TestBed } from '@angular/core/testing';

import { ServerLoggerService } from './server-logger.service';

describe('ServerLoggerService', () => {
  let service: ServerLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
