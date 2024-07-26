import { CanActivateFn } from '@angular/router';

export const canActiveGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
