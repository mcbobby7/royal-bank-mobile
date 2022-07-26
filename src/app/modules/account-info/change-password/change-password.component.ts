import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/http/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  imageSrc = 'assets/icon/royalL.png';
  user = JSON.parse(localStorage.getItem('user'));
  photo;
  show = false;
  loading = false;
  pass = false;
  password;
  passwordNew;
  passwordConfirm;
  check = [];
  passwordResetForm = new FormGroup({
    oldPassword: new FormControl(''),
    newPassword: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor(
    public toast: ToastrService,
    private auth: AuthService,
    private router: Router
  ) {}

  isUpper(str) {
    return /[A-Z]/.test(str);
  }
  isLower(str) {
    return /[a-z]/.test(str);
  }
  checkNumber(str) {
    return /[0-9]/.test(str);
  }
  checkLength(str) {
    if (str.length >= 6) {
      return true;
    } else {
      return false;
    }
  }

  checkStrength(event) {
    console.log(event);
    const upper = this.isUpper(event);
    const lower = this.isLower(event);
    const isNumber = this.checkNumber(event);
    const length = this.checkLength(event);

    const res = [];
    if (upper) {
      res.push(1);
    }
    if (lower) {
      res.push(1);
    }
    if (isNumber) {
      res.push(1);
    }
    if (length) {
      res.push(1);
    }

    this.check = res;
    console.log(this.check);
  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.photo = user.photo ? user.photo : 'assets/icon/hey.png';
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
  display() {
    if (this.check.length < 4) {
      this.toast.error(
        'password should contain lowercase, uppercase, number and minimum of 6 characters',
        'Error'
      );
      return;
    }
    if (!this.password) {
      this.toast.error('Password is required', 'Error');
      return;
    }
    if (!this.passwordNew) {
      this.toast.error('New Password is required', 'Error');
      return;
    }
    if (this.passwordNew !== this.passwordConfirm) {
      this.toast.error('New Password does not match confirm password', 'Error');
      return;
    }
    this.pass = true;
  }

  submit() {
    this.auth
      .post(
        {
          UserId: +this.user.userId,
          CurrentPassword: this.password,
          NewPassword: this.passwordNew,
        },
        'UserManager.UserService.ChangePassword'
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          this.loading = false;

          if (res.data.responseCode === '00') {
            this.toast.success('Password Updated', 'Success');
            this.pass = false;
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
}
