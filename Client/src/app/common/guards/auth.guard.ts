import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// Define the authGuard function, which implements CanActivateFn interface
export const AuthGuard: CanActivateFn = (route, state) => {
  // Use dependency injection to get an instance of the AuthService
  const authService = inject(AuthService);
  const router = inject(Router);
  // Check if the user is logged in using the AuthService
  if (authService.isLoggedIn()) {
    router.navigate(['/login']);
    return true; // If logged in, allow access to the route
  } else {
    return false; // If not logged in, deny access to the route
  }
};
