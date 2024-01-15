
import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { LoginComponent } from '../componenti/login/login.component';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  return inject(LoginComponent).isAuthenticated;
};

export const authGuardChild: CanActivateChildFn = () => {
  return inject(AuthService).isAdmin;
};