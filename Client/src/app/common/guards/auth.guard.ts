import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticatonService } from 'src/app/components/authentication/services/authenticaton.service';


// Define the authGuard function, which implements CanActivateFn interface
export const AuthGuard: CanActivateFn = (route, state) => {
  // Use dependency injection to get an instance of the AuthService
  const authService = inject(AuthenticatonService);
  const router = inject(Router);
  // Check if the user is logged in using the AuthService
  if (!authService.isLoggedIn()) {
    router.navigate(['/login']);
    return false; // If logged in, allow access to the route
  } else {
    return authService.isLoggedIn(); // If not logged in, deny access to the route
  }
};
