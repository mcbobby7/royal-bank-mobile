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
  public getAuth() {
    const token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : null;
    console.log('token', token);

    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
