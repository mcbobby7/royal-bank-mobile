import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/http/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {
  show = localStorage.getItem('showBalance');
  user = JSON.parse(localStorage.getItem('user'));
  data = null;
  url = '';
  constructor(private auth: AuthService, public toast: ToastrService) {}

  ngOnInit() {
    console.log(this.user);
    const user = localStorage.getItem('user');
    const users = user ? JSON.parse(user) : null;
    this.user = users;

    setInterval(() => {
      this.getBalance();
    }, 60000);
    this.getBalance();
  }
  viewBalance() {
    if (localStorage.getItem('showBalance') === 'true') {
      localStorage.setItem('showBalance', 'false');
      this.show = 'false';
    } else {
      localStorage.setItem('showBalance', 'true');
      this.show = 'true';
    }
  }

  getBalance() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user?.accountNos?.length === 0) {
      return;
    }
    const data = {
      clientId: +this.user?.accountNos[0]?.clientId,
      accountId: null,
    };
    this.auth.post(data, 'Cba.BankingService.FetchAccount').subscribe(
      (res: any) => {
        console.log(res);

        if (res.data.responseCode === '00') {
          this.data = res.data.data;
          for (let i = 0; i < this.user?.accountNos?.length; i++) {
            for (let j = 0; i < this.data?.length; j++) {
              if (
                this.user?.accountNos[i]?.accountNo === this.data[j].accountNo
              ) {
                console.log(this.user.accountNos[i].accountNo);
                console.log(this.user.accountNos[i].accountBalance);
                console.log(this.data[j].accountBalance);

                this.user.accountNos[i].accountBalance =
                  this.data[j].accountBalance;
                localStorage.setItem('user', JSON.stringify(this.user));
                console.log(this.user);
              }
            }
          }

          // console.log(this.data);

          // console.log(res);
        } else {
          // console.log(res);
        }
      },
      (err) => console.error(err.message)
    );
  }

  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toast.info('Account number', 'Copied to clipboard');
  }
}
