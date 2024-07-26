import { CanActivateChildFn } from '@angular/router';

export const canActiveChildGuardGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
