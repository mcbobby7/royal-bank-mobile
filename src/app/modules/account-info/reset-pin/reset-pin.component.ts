import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/http/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-pin',
  templateUrl: './reset-pin.component.html',
  styleUrls: ['./reset-pin.component.scss'],
})
export class ResetPinComponent implements OnInit {
  imageSrc = 'assets/icon/royalL.png';
  user = JSON.parse(localStorage.getItem('user'));
  photo;
  show = false;
  loading = true;
  pass = false;
  pinConfirm;
  pin;
  pinNew;
  title = 'Reset Pin';
  constructor(
    public toast: ToastrService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.photo = user.photo ? user.photo : 'assets/icon/hey.png';
    this.auth
      .post(
        { UserId: +this.user.userId, Pin: '0000' },
        'UserManager.UserService.FetchUserPin'
      )
      .subscribe(
        (res: any) => {
          this.loading = false;

          console.log(res);
          if (res.status === '00') {
            if (res.data.data.status === true) {
              this.title = 'Create Pin';
            } else {
              this.title = 'Reset Pin';
            }
          } else {
            this.toast.error('Error please try again', 'Error');
            this.router.navigate(['/action/account-info']);
          }
        },
        (err) => {
          this.loading = false;
          this.toast.error('Check your network and try again', 'Error');

          this.router.navigate(['/action/account-info']);

          console.log('res');

          return;
        }
      );
  }
  close() {
    this.show = !this.show;
  }
  finish() {
    this.submit();

    // this.submit();
  }
  load() {
    this.loading = !this.loading;
  }
  closePass() {
    this.pass = false;
  }
  check() {
    if (this.title === 'Reset Pin') {
      if (!this.pin) {
        this.toast.error('Old Pin is required', 'Error');
        return;
      }
      if (this.pin.toString().length !== 4) {
        this.toast.error('Old Pin should be four characters long', 'Error');
        return;
      }
    }

    if (!this.pinNew) {
      this.toast.error('New Pin is required', 'Error');
      return;
    }
    if (this.pinNew.toString().length !== 4) {
      this.toast.error('New Pin should be four characters long', 'Error');
      return;
    }
    if (this.pinNew !== this.pinConfirm) {
      this.toast.error('New pin does not match confirm pin', 'Error');
      return;
    }
    if (this.title === 'Create Pin') {
      this.submit();
    } else {
      this.checkPin();
    }
  }
  checkPin() {
    this.loading = true;
    this.auth
      .post(
        { UserId: +this.user.userId, Pin: this.pin },
        'UserManager.UserService.FetchUserPin'
      )
      .subscribe(
        (res: any) => {
          this.loading = false;
          if (res.status === '00') {
            if (res.data.data.status === true) {
              this.submit();
            } else {
              this.toast.error(
                'Old pin does not match your current pin',
                'Error'
              );
            }
          } else {
            this.toast.error('Error please try again', 'Error');
            this.loading = false;
          }
        },
        (err) => {
          this.loading = false;
          this.toast.error('Check your network and try again', 'Error');
          console.log('res');

          return;
        }
      );
  }
  submit() {
    this.loading = true;
    this.auth
      .post(
        {
          Id: +this.user.userId,
          Pin: this.pinNew.toString(),
        },
        'UserManager.UserService.UpdatePin'
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          this.loading = false;

          if (res.data.responseCode === '00') {
            this.toast.success('Pin changed successfully', 'Success');
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
  changeConfirmPin(e) {
    console.log(this.pinConfirm);
    if (this.pinConfirm.length > 4) {
      this.pinConfirm = this.pinConfirm.slice(0, -1);
      console.log(this.pinConfirm);
      return;
    }
  }
  changePin(e) {}
  changeNewPin(e) {}
}
