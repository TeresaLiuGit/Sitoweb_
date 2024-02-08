import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {}

  canActivateChild(): boolean {
    if (this.authService.admin==true) {
      return true; // Allow access to the child components
    } else {
      this.router.navigate(['/login']); // Redirect to login page if not admin
      return false; // Block access to the child components
    }
  }
}
