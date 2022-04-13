import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/http/services/auth.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss'],
})
export class TransactionHistoryComponent implements OnInit {
  show = false;
  user = JSON.parse(localStorage.getItem('user'));
  data: any = [];
  loading = false;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.getTransactions();
  }
  viewBalance() {
    this.show = !this.show;
  }

  getTransactions() {
    if (this.user.accountNos.length === 0) {
      return;
    }
    const data = {
      accountId: +this.user.accountNos[0].accountId,
    };
    this.auth
      .post(data, 'Cba.BankingService.FetchAccountTransactions')
      .subscribe(
        (res: any) => {
          console.log(res);

          this.loading = false;
          this.data = res.data.data;
          console.log(this.data);
          if (res.data.responseCode === '00') {
          } else {
            console.log(res);
          }
        },
        (err) => {
          console.error(err.message);
          this.loading = false;
        }
      );
  }
}
