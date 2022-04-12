import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ILogin, IOnboarding } from '../../interfaces/user';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl =
    'https://bankingsandboxapi.vaballiance.com/financialservice/api/v1/proxy';
  notificationBaseUrl = 'https://bankingsandboxapi.vaballiance.com';
  testUrl = 'https://gamelyd.herokuapp.com/users/checkUserName/mcbobby';
  headers = {
    headers: new HttpHeaders({
      /* eslint-disable camelcase */
      'Content-type': 'application/json',
      Tenant: 'REX',
      Authorization: !localStorage.getItem('token')
        ? 'NotAvailable'
        : localStorage.getItem('token'),
    }),
  };
  constructor(private httpClient: HttpClient) {}
  // baseUrl = 'https://api.test.woodcoreapp.com/api/v1/clients';
  // handle error method
  public handleError(errorRsponse: HttpErrorResponse): Observable<never> {
    if (errorRsponse.error instanceof ErrorEvent) {
      console.log('error from frontend', errorRsponse.error);
    } else {
      console.log('error from server', errorRsponse);
    }
    return throwError(() => errorRsponse);
  }

  // onboarding service
  sendEmail(subject, messageBody, receiver, cc): Observable<void> {
    const data = {
      subject,
      messageBody,
      receiver,
      cc,
    };
    console.log(data);

    return this.httpClient
      .post<void>(
        this.notificationBaseUrl +
          '/notificationservice/api/notification/sendmails',
        data,
        this.headers
      )
      .pipe(catchError(this.handleError));
  }

  // login service
  post(data: any, action: string): Observable<void> {
    const payload = {
      action,
      data,
    };
    console.log(payload);

    return this.httpClient
      .post<void>(this.baseUrl, payload, this.headers)
      .pipe(catchError(this.handleError));
  }
}
