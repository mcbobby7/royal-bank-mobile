import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/http/services/auth.service';

@Component({
  selector: 'app-limit',
  templateUrl: './limit.component.html',
  styleUrls: ['./limit.component.scss'],
})
export class LimitComponent implements OnInit {
  imageSrc = 'assets/icon/royalL.png';
  user = JSON.parse(localStorage.getItem('user'));
  photo;
  show = false;
  loading = false;
  pass = false;
  limitInter;
  limitIntra;
  constructor(public toast: ToastrService, private auth: AuthService) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
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
  }
  check() {
    if (!this.limitInter) {
      this.toast.error('All inputs are required', 'Error');
      return true;
    }
    if (!this.limitIntra) {
      this.toast.error('All inputs are required', 'Error');
      return true;
    }
    this.pass = true;
  }

  submit() {
    this.auth
      .post(
        {
          Channel: 'Mobile App',
          UserId: +this.user.userId,
          IntraLimit: +this.limitIntra,
          InterLimit: +this.limitInter,
        },
        'UserManager.UserService.SaveUserTransactionLimit'
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          this.loading = false;

          if (res.data.responseCode === '00') {
            this.toast.success('Limit Updated', 'Success');
            this.pass = false;
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
}
