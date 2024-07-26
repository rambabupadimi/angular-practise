import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { canActiveChildGuardGuard } from './can-active-child-guard.guard';

describe('canActiveChildGuardGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canActiveChildGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
