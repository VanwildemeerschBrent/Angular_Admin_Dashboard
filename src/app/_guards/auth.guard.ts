import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

export class AuthGuard implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router) { }

    canActivate() {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
        }
        return this.authService.isLoggedIn()
    }
}
