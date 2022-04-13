import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/http/services/auth.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {
  show = false;
  user = JSON.parse(localStorage.getItem('user'));
  data = null;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.getBalance();
  }
  viewBalance() {
    this.show = !this.show;
  }

  getBalance() {
    if (this.user.accountNos.length === 0) {
      return;
    }
    const data = {
      clientId: +this.user.accountNos[0].clientId,
      accountId: +this.user.accountNos[0].accountId,
    };
    this.auth.post(data, 'Cba.BankingService.FetchAccountBalance').subscribe(
      (res: any) => {
        // console.log(res);

        if (res.data.responseCode === '00') {
          this.data = res.data.data.balance;
          // console.log(this.data);

          // console.log(res);
        } else {
          // console.log(res);
        }
      },
      (err) => console.error(err.message)
    );
  }
}
