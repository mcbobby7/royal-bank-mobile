import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/http/services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  show = false;
  userId: any = localStorage.getItem('stageId');
  accountId = '';
  accountBalance = '';

  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit() {
    this.getBalance();
  }

  viewBalance(){
    this.show = !this.show;
  }

  getBalance(){
    if(this.userId){
      this.auth.post(this.userId, 'Cba.BankingService.FetchAccountBalance').subscribe((res: any) => {
        if (res.data.responseCode === '00') {
          this.accountBalance = res.data.AccountBalances;
        }
      });
    } else {
      this.router.navigate(['/login']);
    }
  }


  getTransactions(){
    this.auth.post(this.accountId, 'Cba.BankingService.FetchAccountTransactions').subscribe((res: any) => {

    });
  }

}
