import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/http/services/auth.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {
  show = false;
  constructor(private auth: AuthService) {}

  ngOnInit() {}
  viewBalance() {
    this.show = !this.show;
  }

  register() {
    this.auth
      .post(
        {
          clientId: 418,
          savingsId: 20,
        },
        'Cba.BankingService.FetchAccountBalance'
      )
      .subscribe(
        (res: any) => {
          if (res.data.responseCode === '00') {
            console.log(res.data.data.id);

            console.log(res);
          } else {
            console.log(res.data.responseMessage);
          }
        },
        (err) => console.error(err.message)
      );
  }
}
