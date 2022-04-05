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

// import {
//   mergeMap as _observableMergeMap,
//   catchError as _observableCatch,
// } from "rxjs/operators";
// import {
//   Observable,
//   throwError as _observableThrow,
//   of as _observableOf,
// } from "rxjs";
// import { Injectable, Inject, Optional, InjectionToken } from "@angular/core";
// import {
//   HttpClient,
//   HttpHeaders,
//   HttpResponse,
//   HttpResponseBase,
// } from "@angular/common/http";
// import { environment } from "../../environments/environment";
// import { HTTP } from "@ionic-native/http/ngx";
// import { from } from "rxjs";

// let options_: any = {
//   body: content_,
//   observe: "response",
//   responseType: "blob",
//   headers: new HttpHeaders({
//     session_token:
//       session_token !== undefined && session_token !== null
//         ? "" + session_token
//         : "",
//     imei: imei !== undefined && imei !== null ? "" + imei : "",
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   }),
// };
// this.htp.setDataSerializer("json");
// return from(
//   this.htp
//     .post(url_, payload, null)
//     .then((data) => {
//       return JSON.parse(data.data);
//     })
//     .catch((error) => {
//       return throwException(
//         "An unexpected server error occurred.",
//         400,
//         "server error",
//         options_
//       );
//     })
// );

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
