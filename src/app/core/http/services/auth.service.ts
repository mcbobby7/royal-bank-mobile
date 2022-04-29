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
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'https://bankingsandboxapi.azurewebsites.net/api/v1/proxy';
  fileUrl =
    'https://bankingsandboxapi.vaballiance.com/fileservice/api/files/upload';
  notificationBaseUrl = 'https://bankingsandboxapi.vaballiance.com';
  testUrl = 'https://gamelyd.herokuapp.com/users/checkUserName/mcbobby';
  imei;
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
  constructor(
    private uid: Uid,
    private androidPermissions: AndroidPermissions,
    private httpClient: HttpClient
  ) {
    this.getImei();
  }
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
      tenant: 'REX',
      channel: 'MobileApp',
      channelIdentified: this.imei ? this.imei : '12345',
      action,
      data,
    };
    console.log(payload);
    console.log('return', this.uid.IMEI);
    console.log('state', this.imei);
    return this.httpClient
      .post<void>(this.baseUrl, payload, this.headers)
      .pipe(catchError(this.handleError));
  }

  fileUpload(data: any): Observable<void> {
    console.log(data);
    return this.httpClient
      .post<void>(this.fileUrl, data, this.headers)
      .pipe(catchError(this.handleError));
  }

  async getImei() {
    const { hasPermission } = await this.androidPermissions.checkPermission(
      this.androidPermissions.PERMISSION.READ_PHONE_STATE
    );

    if (!hasPermission) {
      const result = await this.androidPermissions.requestPermission(
        this.androidPermissions.PERMISSION.READ_PHONE_STATE
      );

      if (!result.hasPermission) {
        throw new Error('Permissions required');
      }

      // ok, a user gave us permission, we can get him identifiers after restart app
      return;
    }

    this.imei = this.uid.IMEI;
    return this.uid.IMEI;
  }
}
