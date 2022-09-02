import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/http/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

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
  accNum;
  show = false;
  saveBene;
  mode: string;
  dataType = '';
  formattedAmount;
  amount;
  user = JSON.parse(localStorage.getItem('user'));
  benes = localStorage.getItem('benes')
    ? JSON.parse(localStorage.getItem('benes'))
    : [];
  beneficiaryForm = new FormGroup({
    beneficiaryAccount: new FormControl(''),
    amount: new FormControl(''),
    narration: new FormControl(''),
  });
  amounts: any = [100, 300, 500, 1000, 3000, 5000];

  constructor(
    private auth: AuthService,
    public toast: ToastrService,
    private router: Router,
    private currencyPipe: CurrencyPipe
  ) {}

  ngOnInit() {
    this.getBen();
    console.log(this.user.accountNos.length);

    this.fetchData();
    this.accNum = this.user.accountNos[0]
      ? this.user.accountNos[0].accountNo
      : '';
  }
  transformAmount(element) {
    this.formattedAmount = Number(
      this.formattedAmount.replace(/[^0-9.-]+/g, '')
    ).toString();
    this.formattedAmount = this.currencyPipe.transform(
      this.formattedAmount,
      '₦'
    );

    element.target.value = this.formattedAmount;
    this.amount = Number(this.formattedAmount.replace(/[^0-9.-]+/g, ''));
  }
  setAmount(data) {
    const event: any = {
      target: {
        value: data,
      },
    };
    this.formattedAmount = data;

    this.formattedAmount = this.currencyPipe.transform(
      this.formattedAmount,
      '₦'
    );
    this.amount = Number(this.formattedAmount.replace(/[^0-9.-]+/g, ''));
    // this.transformAmount(event);
  }
  fetchData() {
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
              this.toast.error(res.data.responseMessage, 'Error');
            }
          },
          (err) => {
            this.loading = false;
            this.toast.error('Check your internet connection', 'Error');

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
            this.productCode = this.products[0].productCode;
            console.log(this.vars);
            console.log(res);
          } else {
            console.log(res.data.responseMessage);
          }
        },
        (err) => console.error(err.message)
      );
  }

  getBen() {
    this.auth
      .post(
        {
          UserId: +this.user.userId,
        },
        'Cba.BankingService.FetchAllBeneficiary'
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res.data.responseCode === '00') {
            // deal with register

            this.benes = res.data.data.sort((a, b) => b.id - a.id);
            this.benes = this.benes.filter(
              (ben) => ben.name === 'Airtime/Data'
            );
            localStorage.setItem(
              'benes',
              JSON.stringify(res.data.data.sort((a, b) => b.id - a.id))
            );
          } else {
          }
        },
        (err) => {}
      );
  }

  addBen() {
    this.auth
      .post(
        {
          Name: 'Airtime/Data',
          AccountName: this.dataType,
          AccountNumber: this.phoneNumber,
          Company: this.dataType + '/' + this.productCode,
          UserId: +this.user.userId,
        },
        'Cba.BankingService.AddBeneficiary'
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res.data.responseCode === '00') {
            this.getBen();
            // deal with register
          } else {
          }
        },
        (err) => {}
      );
  }

  transactionType(e, code, mode) {
    this.fetchProduct(code);
    console.log('This is the code:', code);
    this.transType = e;
    this.dataType = code;
    this.mode = mode;
  }
  adds() {
    if (this.user.hasBVN === false) {
      this.toast.error(
        `You have to verify your BVN to carry out transactions`,
        'Error'
      );
      return true;
    }
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
  delete(number) {
    console.log(this.benes);
    this.loading = true;
    this.auth
      .post(
        {
          Id: number,
        },
        'Cba.BankingService.RemoveBeneficiary'
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res.data.responseCode === '00') {
            this.loading = false;
            // deal with register
            const data = [];
            for (let i = 0; i < this.benes.length; i++) {
              if (this.benes[i].id !== number) {
                data.push(this.benes[i]);
              }
            }
            this.benes = data;
          } else {
          }
        },
        (err) => {}
      );
  }

  use(num) {
    console.log(num);

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
    let acc;
    for (let i = 0; i < this.products.length; i++) {
      if (this.productCode === this.products[i].productCode) {
        payload = this.products[i];
      }
    }
    for (let i = 0; i < this.user.accountNos.length; i++) {
      if (this.user.accountNos[i].accountNo === this.accNum) {
        acc = this.user.accountNos[i].accountId;
      }
    }

    this.auth
      .post(
        {
          clientId: this.user.clientId,
          accountId: acc,
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
                    Amount:
                      this.mode === 'data'
                        ? +payload.productPrice
                        : this.amount,
                    CustomerAccountNo: this.accNum,
                  },
                  'Cba.ValueAddedService.PostTransaction'
                )
                .subscribe(
                  (res: any) => {
                    this.loading = false;
                    console.log(res);

                    if (res.data.status === '200') {
                      if (this.saveBene) {
                        for (let i = 0; i < this.benes.length; i++) {
                          if (
                            this.benes[i].accountNumber === this.phoneNumber
                          ) {
                            return;
                          }
                        }
                        this.addBen();
                      }
                      this.toast.success('Transaction Successfull', 'Success');
                      this.show = false;
                      this.phoneNumber = '';
                      this.productCode = '';
                      this.amount = null;
                      // deal with register
                    } else {
                      this.toast.error('Error please try again', 'Error');

                      console.log(res.data.responseMessage);
                    }
                  },
                  (err) => {
                    console.error(err.message);
                    this.toast.error('Error please try again', 'Error');

                    this.loading = false;
                  }
                );
            }
            // deal with register
          } else {
            console.log(res.data.responseMessage);
            this.toast.error(res.data.responseMessage, 'Error');
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
  check() {
    if (this.user.hasBVN === false) {
      this.toast.error(
        `You have to verify your BVN to carry out transactions`,
        'Error'
      );
      return true;
    }
    if (!this.phoneNumber) {
      this.toast.error('Phone number required', 'Error');
      return;
    }
    if (!this.productCode) {
      this.toast.error('Product required', 'Error');
      return;
    }
    this.show = true;
  }
  finish() {
    this.submit();
  }
  load() {
    this.loading = !this.loading;
  }
  close() {
    this.show = false;
  }
}
