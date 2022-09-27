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
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // baseUrl = 'https://bankingsandboxapi.azurewebsites.net/api/v1/proxy';
  // fileUrl = 'https://fileservice01.azurewebsites.net/api/Files/Upload';
  // notificationBaseUrl = 'https://notificationservice01.azurewebsites.net';
  // documentUrl =
  //   'https://fileservice01.azurewebsites.net/api/Files/RoyalDocumentUpload';

  baseLink = 'http://51.81.213.140:89/';
  baseUrl = 'http://51.81.213.140:89/api/v1/proxy';
  fileUrl = 'http://51.81.213.140:81/api/Files/Upload';
  notificationBaseUrl = 'https://notificationservice01.azurewebsites.net';
  documentUrl = 'http://51.81.213.140:81/api/Files/RoyalDocumentUpload';
  imei;
  headers = {
    headers: new HttpHeaders({
      /* eslint-disable camelcase */
      'Content-type': 'application/json',
      Tenant: 'REX',
      Authorization: !localStorage.getItem('token')
        ? 'NotAvailable'
        : localStorage.getItem('token'),
      Auth: !localStorage.getItem('token')
        ? 'NotAvailable'
        : localStorage.getItem('token'),
    }),
  };
  constructor(
    private uniqueDeviceID: UniqueDeviceID,
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
    const headers = {
      headers: new HttpHeaders({
        /* eslint-disable camelcase */
        'Content-type': 'application/json',
        Tenant: 'REX',
        Authorization: !localStorage.getItem('token')
          ? 'NotAvailable'
          : localStorage.getItem('token'),
        Auth: !localStorage.getItem('token')
          ? 'NotAvailable'
          : localStorage.getItem('token'),
      }),
    };
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
      .post<void>(this.baseUrl, payload, headers)
      .pipe(catchError(this.handleError));
  }

  fileUpload(data: any): Observable<void> {
    console.log(data);
    return this.httpClient
      .post<void>(this.fileUrl, data, this.headers)
      .pipe(catchError(this.handleError));
  }

  documentUpload(data: any): Observable<void> {
    console.log(data);
    return this.httpClient
      .post<void>(this.documentUrl, data, this.headers)
      .pipe(catchError(this.handleError));
  }
  async getImei() {
    await this.getPermission();
    this.getUniqueDeviceID();
  }

  getUniqueDeviceID() {
    this.uniqueDeviceID
      .get()
      .then((uuid: any) => {
        console.log(uuid);
        this.imei = uuid;
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  getPermission() {
    this.androidPermissions
      .checkPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE)
      .then((res) => {
        if (res.hasPermission) {
          this.getUniqueDeviceID();
        } else {
          this.androidPermissions
            .requestPermission(
              this.androidPermissions.PERMISSION.READ_PHONE_STATE
            )
            .then((res) => {
              alert('Persmission Granted Please Restart App!');
            })
            .catch((error) => {
              alert('Error! ' + error);
            });
        }
      })
      .catch((error) => {
        alert('Error! ' + error);
      });
  }
}
