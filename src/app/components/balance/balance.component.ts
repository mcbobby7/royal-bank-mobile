import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/http/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {
  show = false;
  user = JSON.parse(localStorage.getItem('user'));
  data = null;
  constructor(private auth: AuthService, public toast: ToastrService) {}

  ngOnInit() {
    setInterval(() => {
      this.getBalance();
    }, 60000);
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
