import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/http/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as moment from 'moment';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  group,
  query,
  stagger,
  keyframes,
} from '@angular/animations';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('500ms ease-in', style({ transform: 'translateY(-0%)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class HistoryComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user'));
  account;
  loading = true;
  types;
  typeId;
  endDate;
  startDate;
  data = [];
  visible = false;
  tran: any = {};
  details: any = {};
  transType = 'debit';
  counter = 0;
  tranType: string;
  historyForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    transType: new FormControl(''),
  });
  constructor(
    private auth: AuthService,
    public toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    // let   user = JSON.parse(localStorage.getItem('user'));
    this.account = this.user.accountNos[0].accountNo;
    this.fetchTransTypes();
  }

  setTrans(transaction) {
    let id;
    for (let i = 0; i < this.user.accountNos.length; i++) {
      if (this.account === this.user.accountNos[i].accountNo) {
        id = this.user.accountNos[i].accountId;
      }
    }

    this.loading = true;
    const payload = {
      accountId: id,
      transactionId: transaction.transactionId,
    };
    this.auth
      .post(payload, 'Cba.BankingService.FetchTransactionDetails')
      .subscribe(
        (res: any) => {
          this.loading = false;
          console.log(res);

          if (res.data.responseCode === '00') {
            this.details = res.data.data;
            this.tran = transaction;
            this.tranType = transaction.transactionType;
            this.setVissible();
          } else {
            this.toast.error(res.data.responseMessage, 'Error');
          }
        },
        (err) => {
          this.toast.error('Failed to fetch transaction', 'Error');
          // this.router.navigate(['/dashboard']);
          this.loading = false;
        }
      );

    console.log(transaction);
  }
  setVissible() {
    this.visible = !this.visible;
  }

  fetchTransTypes() {
    this.auth
      .post({}, 'Cba.BankingService.FetchAccountTransactionsHistoryTypes')
      .subscribe(
        (res: any) => {
          this.loading = false;
          console.log(res);

          if (res.data.responseCode === '00') {
            this.types = res.data.data;
            this.typeId = res.data.data[0].id;
          } else {
            this.toast.error(res.data.responseMessage, 'Error');
            this.router.navigate(['/dashboard']);
          }
        },
        (err) => {
          this.toast.error('Failed to fetch transaction types', 'Error');
          // this.router.navigate(['/dashboard']);
          this.loading = false;
        }
      );
  }

  fetchHistory() {
    this.loading = true;
    let accId;
    console.log(this.account);
    for (let i = 0; i < this.user.accountNos.length; i++) {
      if (this.user.accountNos[i].accountNo === this.account) {
        accId = this.user.accountNos[i].accountId;
      }
    }

    this.auth
      .post(
        {
          accountId: accId.toString(),
          transactionType: this.typeId.toString(),
          fromDate: moment(this.startDate).format('DD MMM YYYY'),
          toDate: moment(this.endDate).format('DD MMM YYYY'),
        },
        'Cba.BankingService.FetchAccountTransactionsByDateAndType'
      )
      .subscribe(
        (res: any) => {
          this.loading = false;
          console.log(res);

          if (res.data.responseCode === '00') {
            this.data = res.data.data;
          } else {
            this.toast.error(res.data.responseMessage, 'Error');
          }
        },
        (err) => {
          this.toast.error('Failed to fetch transaction', 'Error');
          this.loading = false;
        }
      );
  }
}
