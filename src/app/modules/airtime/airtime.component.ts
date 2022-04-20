import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/http/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airtime',
  templateUrl: './airtime.component.html',
  styleUrls: ['./airtime.component.scss'],
})
export class AirtimeComponent implements OnInit {
  selectedBtn = true;
  selectedBtn1 = false;
  newReq = true;
  transType = 0;
  vars: any = [];
  subs: any = [];
  products: any = [];
  add = false;
  name;
  benNum;
  productCode;
  phoneNumber;
  loading = true;
  vasType;
  submitCode;
  user = JSON.parse(localStorage.getItem('user'));
  benes = localStorage.getItem('benNums')
    ? JSON.parse(localStorage.getItem('benNums'))
    : [];
  beneficiaryForm = new FormGroup({
    beneficiaryAccount: new FormControl(''),
    amount: new FormControl(''),
    narration: new FormControl(''),
  });

  constructor(
    private auth: AuthService,
    public toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    console.log();
    try {
      this.auth
        .post({ VasCategoryId: 4 }, 'Cba.ValueAddedService.FetchTypes')
        .subscribe(
          (res: any) => {
            if (res.status === '00') {
              // deal with register
              this.loading = false;

              this.vars = res.data;
              console.log(this.vars);
            } else {
              this.loading = false;
              this.router.navigate(['/dashboard']);
            }
          },
          (err) => {
            this.loading = false;
            this.router.navigate(['/dashboard']);
          }
        );
      this.auth
        .post({ VasCategoryId: 2 }, 'Cba.ValueAddedService.FetchTypes')
        .subscribe(
          (res: any) => {
            if (res.status === '00') {
              // deal with register
              this.loading = false;

              this.subs = res.data;
              console.log(this.subs);
            } else {
              console.log(res.data.responseMessage);
            }
          },
          (err) => console.error(err.message)
        );
    } catch (err) {
      console.log(err);
      this.loading = false;
    }
  }

  fetchProduct(code) {
    console.log();

    this.auth
      .post({ vasTypeCode: code }, 'Cba.ValueAddedService.FetchProducts')
      .subscribe(
        (res: any) => {
          if (res.status === '00') {
            // deal with register
            this.products = res.data;
            console.log(this.vars);
            console.log(res);
          } else {
            console.log(res.data.responseMessage);
          }
        },
        (err) => console.error(err.message)
      );
  }

  transactionType(e, code) {
    this.fetchProduct(code);
    console.log('This is the code:', code);
    this.transType = e;
  }
  adds() {
    if (!this.benNum) {
      this.toast.error('mobile number is required', 'Error');
      return;
    }
    if (!this.name) {
      this.toast.error('name is required', 'Error');
      return;
    }
    for (let i = 0; i < this.benes.length; i++) {
      if (this.benes[i].phoneNumber === this.benNum) {
        this.toast.error('Number already exist', 'Error');
        return;
      }
    }
    this.benes.unshift({
      name: this.name,
      phoneNumber: this.benNum,
    });
    localStorage.setItem('benNums', JSON.stringify(this.benes));
  }
  delete(phone) {
    console.log(this.benes);

    const data = [];
    for (let i = 0; i < this.benes.length; i++) {
      if (this.benes[i].phoneNumber !== phone) {
        data.push(this.benes[i]);
      }
    }
    this.benes = data;
    localStorage.setItem('benNums', JSON.stringify(this.benes));
    console.log(this.benes);
  }

  use(num) {
    this.phoneNumber = num;
    this.newReq = true;
  }

  create() {
    console.log('Hey');
  }
  new() {
    this.add = !this.add;
  }
  submit() {
    this.loading = true;
    let payload;
    for (let i = 0; i < this.products.length; i++) {
      if (this.productCode === this.products[i].productCode) {
        payload = this.products[i];
      }
    }

    this.auth
      .post(
        {
          clientId: this.user.clientId,
          accountId: this.user.accountNos[0].accountId,
        },
        'Cba.BankingService.FetchAccountBalance'
      )
      .subscribe(
        (res: any) => {
          console.log(res.data.data.balance);
          if (res.data.responseCode === '00') {
            console.log(res.data.data.balance, +payload.productPrice);

            if (+payload.productPrice > res.data.data.balance) {
              this.loading = false;
              this.toast.error('Insufficient balance', 'Error');
              return;
            } else {
              this.auth
                .post(
                  {
                    VasTypeCode: payload.vasTypeCode,
                    ProductCode: payload.productCode,
                    RefNo: this.phoneNumber,
                    Amount: +payload.productPrice,
                    CustomerAccountNo: this.user.accountNos[0].accountNo,
                  },
                  'Cba.ValueAddedService.PostTransaction'
                )
                .subscribe(
                  (res: any) => {
                    this.loading = false;
                    console.log(res);

                    if (res.data.status === '200') {
                      this.toast.success('Transaction Successfull', 'Success');
                      // deal with register
                    } else {
                      this.toast.error('Error please try again', 'Error');

                      console.log(res.data.responseMessage);
                    }
                  },
                  (err) => {
                    console.error(err.message);
                    this.toast.error('Error please try again', 'Error');

                    this.loading = true;
                  }
                );
            }
            // deal with register
          } else {
            console.log(res.data.responseMessage);
          }
        },
        (err) => {
          this.loading = false;
          this.toast.error('Please try again', 'Error');
        }
      );
  }
  toggleRequest(e) {
    this.newReq = e;
    if (e === true) {
      this.selectedBtn = e;
      this.selectedBtn1 = false;
    } else {
      this.selectedBtn = false;
      this.selectedBtn1 = true;
    }
  }
}
