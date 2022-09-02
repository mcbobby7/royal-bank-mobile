import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/http/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  loading = false;
  show = false;
  // signinForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });
  imageSrc = 'assets/icon/hey.png';
  data: any;
  loginForm!: FormGroup;
  change = true;
  email;
  otp;
  password;
  confirmPassword;
  check = [];
  constructor(
    private auth: AuthService,
    public toast: ToastrService,
    private router: Router
  ) {}
  viewpassword() {
    this.show = !this.show;
  }

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
  // getUsers() {
  //   this.auth.getUsers().subscribe(
  //     (x) => console.log('Observer got a next value: ' + x),
  //     (err) => console.error(err.message),
  //     () => console.log('Observer got a complete notification')
  //   );
  // }

  // login method
  resetPassword() {
    // setTimeout(() => {
    //   this.router.navigate(['/dashboard']);
    //   this.loading = false;
    // }, 3000);
    if (this.check.length < 4) {
      this.toast.error(
        'password should contain lowercase, uppercase, number and minimum of 6 characters',
        'Error'
      );
      return;
    }
    if (this.password != this.confirmPassword) {
      this.toast.error('Password must match confirm password', 'Error');
      return;
    }
    this.loading = true;

    const data = {
      Email: this.email,
      OTP: this.otp,
      Password: this.password,
      ConfirmPassword: this.confirmPassword,
    };
    this.auth.post(data, 'UserManager.UserService.ResetPassword').subscribe(
      (res: any) => {
        this.loading = false;
        console.log(res);

        if (res.data.responseCode === '00') {
          this.toast.success('Password reset Successful', 'Success');
          this.data = res.data;
          console.log(res.data);
          this.router.navigate(['/login']);
        } else {
          this.toast.error(res.data.responseMessage, 'Error');
        }
      },
      (err) => {
        this.toast.error('Check your internet connection', 'Error');
        this.loading = false;
      }
    );
  }
  forgot() {
    this.router.navigate(['/forgot-passowrd']);
  }

  ngOnInit(): void {
    // login form
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  register() {
    this.router.navigate(['/register']);
  }
  loginNow() {
    this.router.navigate(['/login']);
  }
  sendOtp() {
    this.loading = true;
    this.auth
      .post(
        { EmailorPhonenumber: this.email },
        'UserManager.UserService.SendResetPasswordOtp'
      )
      .subscribe(
        (res: any) => {
          this.loading = false;
          console.log(res);

          if (res.data.responseCode === '00') {
            this.toast.success('OTP sent to your Email', 'Thanks');
            this.change = false;
          } else {
            this.toast.error(res.data.responseMessage, 'Thanks');
          }
        },
        (err) => {
          this.toast.error('Please check you network and try again', 'Thanks');
          this.loading = false;
        }
      );
  }
}
