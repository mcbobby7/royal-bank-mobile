import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/http/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent implements OnInit {
  imageSrc = 'assets/icon/royalL.png';
  user = JSON.parse(localStorage.getItem('user'));
  photo;
  show = false;
  loading = false;
  pass = false;
  limitInter;
  limitIntra;
  selectedBtn = true;
  selectedBtn1 = false;
  newReq = true;
  accNum;
  cardTypes = ['Master Card', 'Visa'];
  cardType = this.cardTypes[0];
  branch;
  branches = [];
  history = [];
  constructor(
    public toast: ToastrService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.user.accountNos.length < 1) {
      this.toast.error('No account number available', 'Error');
      this.router.navigate(['/dashboard']);
    }
    const user = JSON.parse(localStorage.getItem('user'));
    this.accNum = this.user.accountNos[0].accountNo;
    this.photo = user.photo ? user.photo : 'assets/icon/hey.png';
    this.auth
      .post(
        {
          UserId: +this.user.userId,
          Channel: 'MobileApp',
        },
        'UserManager.UserService.FetchUserTransactionLimit'
      )
      .subscribe(
        (res: any) => {
          console.log(res);

          if (res.status === '00') {
            this.limitInter = res.data.data[0].interLimit;
            this.limitIntra = res.data.data[0].intraLimit;
            console.log(this.limitInter, this.limitIntra);

            // deal with register
          } else {
          }
        },
        (err) => {}
      );
    this.auth.post({}, 'Cba.BankingService.FetchBranches').subscribe(
      (res: any) => {
        if (res.data.responseCode === '00') {
          this.branches = res.data.data;
          this.branch = this.branches[0];
          console.log(this.branches);
        } else {
        }
      },
      (err) => {}
    );
    this.auth.post({}, 'Cba.BankingService.FetchCardRequests').subscribe(
      (res: any) => {
        if (res.data.responseCode === '00') {
          this.history = res.data.data;
          console.log(this.history);
        } else {
        }
      },
      (err) => {}
    );
  }
  check() {
    if (!this.accNum) {
      this.toast.error('Account number is required', 'Error');
      return true;
    }
    if (!this.branch) {
      this.toast.error('Pickup branch is required', 'Error');
      return true;
    }
    if (!this.cardType) {
      this.toast.error('Card type is required', 'Error');
      return true;
    }
    this.pass = true;
  }

  submit() {
    this.auth
      .post(
        {
          AccountNo: this.accNum,
          Branch: this.branch,
          CardType: this.cardType,
          Status: 'Pending',
          UserId: this.user.userId,
        },
        'Cba.BankingService.CardRequest'
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          this.loading = false;

          if (res.data.responseCode === '00') {
            this.toast.success('Request Successful', 'Success');
            this.pass = false;
            localStorage.setItem('card', 'true');
            this.router.navigate(['/dashboard']);

            // deal with register
          } else {
            this.toast.error(res.data.responseMessage, 'Error');
          }
        },
        (err) => {
          this.toast.error('please try again', 'Error');
          this.loading = false;
        }
      );
  }

  close() {
    this.show = !this.show;
  }
  finish() {
    this.submit();
  }
  load() {
    this.loading = !this.loading;
  }
  closePass() {
    this.pass = false;
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
