import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  passwordResetForm = new FormGroup({
    oldPassword: new FormControl(''),
    newPassword: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

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
  }
  load() {
    this.loading = !this.loading;
  }
  closePass() {
    this.pass = false;
  }
  display() {
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
          CurrentPassword: 'p@ssw0rd',
          NewPassword: 'p@ssw0rd',
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
