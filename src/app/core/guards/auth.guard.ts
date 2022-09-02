import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    console.log('isAuthenticated auth', this.auth.getAuth());

    if (!this.auth.getAuth()) {
      this.router.navigate(['/welcome']);
      return false;
    }
    return true;
  }
}
