import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UnAuthGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    console.log('isAuthenticated', this.auth.getAuth());

    if (this.auth.getAuth()) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
}
