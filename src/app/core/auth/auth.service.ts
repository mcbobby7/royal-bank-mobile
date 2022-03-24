import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;
  isAuthenticated$: boolean;

  constructor() {
    this.isAuthenticated$ = false;
    if (localStorage.getItem('token')) {
      this.isAuthenticated$ = true;
    }
  }

  getUserId() {
    return this.user;
  }
}
