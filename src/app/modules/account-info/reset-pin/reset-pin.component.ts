import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/http/services/auth.service';

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
  loading = false;
  pass = false;
  pinConfirm;
  pin;
  pinNew;

  constructor(public toast: ToastrService, private auth: AuthService) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.photo = user.photo ? user.photo : 'assets/icon/hey.png';
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
    this.pass = true;
  }
  submit() {
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
