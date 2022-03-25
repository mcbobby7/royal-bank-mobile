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
    'http://bankingsandboxapi.midraconsulting.com/financialservice/api/v1/proxy';
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

  getOnboardingStage(id: string): Observable<any[]> {
    return this.httpClient
      .get<any[]>(this.baseUrl + `${id}`)
      .pipe(catchError(this.handleError));
  }

  // onboarding service
  onboarding(data: IOnboarding): Observable<void> {
    return this.httpClient
      .post<void>(this.baseUrl, data, this.headers)
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
  test(data: any, action: string): Observable<void> {
    const payload = {
      action,
      data,
      response: {
        ResponseCode: '000',
        ResponseMessage: 'User Found',
        user: {
          UserName: 'Benzy',
          FirstName: 'Benzy',
          LastName: 'LukzeeMan',
          MiddleName: 'AyobMan',
          Phone: '07099999998',
          Email: 'test2@gmail.com',
          Password: 'p@ssw0rd',
          CreateBankAccount: true,
          DOB: '30 March 2022',
          RefCode: '123456',
          Verified: false,
          AccountType: 'Royal Basic',
          CompanyType: 'Corporate',
          PassportUrl: '',
          HasBVN: true,
          Stage: 1,
          IsFinal: false,
          BVN: '17654345678',
        },
      },
    };
    console.log(payload);

    return this.httpClient
      .post<void>(this.baseUrl, payload, this.headers)
      .pipe(catchError(this.handleError));
  }
}
