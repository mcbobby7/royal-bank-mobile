import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/http/services/auth.service';
@Component({
  selector: 'app-verify-phone',
  templateUrl: './verify-phone.component.html',
  styleUrls: ['./verify-phone.component.scss'],
})
export class VerifyPhoneComponent implements OnInit {
  bvnError = false;
  otp;
  enOTP;
  stage = 0;
  id: any = localStorage.getItem('stageId');
  onboardingForm: FormGroup;
  loading = true;
  user: any = {};

  constructor(
    private auth: AuthService,
    private router: Router,
    public toast: ToastrService,
    public navController: NavController,
    public route: ActivatedRoute
  ) {}

  // register method

  getOnboardingStage() {
    if (this.id) {
      this.auth
        .post({ UserId: this.id }, 'UserManager.UserService.FetchUserDetail')
        .subscribe(
          (res: any) => {
            this.loading = false;
            if (res.data.responseCode === '00') {
              // this.process = res.data.userDetail;
              this.user = res.data.userDetail;
              this.sendOtp();
              console.log(res);
            } else {
              console.log(res);
              this.router.navigate(['/register/become-royalty']);
              this.toast.error('Please try again', 'Error');
            }
          },
          (err) => {
            this.router.navigate(['/register/become-royalty']);
            this.toast.error('Please try again', 'Error');
          }
        );
    } else {
      this.router.navigate(['/register/become-royalty']);
    }
    return;
  }

  ngOnInit(): void {
    // register form
    this.getOnboardingStage();
    // console.log(this.onboardingForm.value);
  }

  sendOtp() {
    this.loading = true;
    this.auth
      .post(
        { UserId: +this.id, EmailorPhonenumber: this.user.phoneNo },
        'UserManager.UserService.SendOtp'
      )
      .subscribe(
        (res: any) => {
          this.loading = false;
          console.log(res);

          if (res.status === '00') {
            this.otp = res.data.data.otp;
            this.toast.success('OTP sent to your Mobile', 'Thanks');
          } else {
            this.bvnError = true;
          }
        },
        (err) => console.error(err.message)
      );
  }

  verifyOtp() {
    console.log(this.otp, this.enOTP);
    this.loading = true;
    this.bvnError = false;
    console.log(this.otp, this.enOTP);
    this.auth
      .post(
        { EmailorPhonenumber: this.user.phoneNo, Otp: this.enOTP },
        'UserManager.UserService.ValidateOtp'
      )
      .subscribe(
        (res: any) => {
          this.loading = false;
          console.log(res);

          if (res.data.responseCode === '00') {
            if (this.route.snapshot.params.mode === '1') {
              this.router.navigate(['/register/bvn-success/1']);
            } else if (this.route.snapshot.params.mode === '2') {
              this.router.navigate(['/register/image']);
            } else if (this.route.snapshot.params.mode === '3') {
              this.router.navigate(['/register/image-done']);
            } else if (this.route.snapshot.params.mode === '4') {
              this.router.navigate(['/register/bvn-success/2']);
            }
          } else {
            this.bvnError = true;
          }
        },
        (err) => console.error(err.message)
      );

    this.bvnError = false;
    if (this.otp === this.enOTP) {
    } else {
      this.bvnError = true;
    }
  }

  goBack() {
    if (this.stage === 0) {
      this.navController.back();
    } else {
      this.stage -= 1;
    }
  }
  next() {
    if (this.route.snapshot.params.mode === '1') {
      this.router.navigate(['/register/bvn-success/1']);
    } else if (this.route.snapshot.params.mode === '2') {
      this.router.navigate(['/register/image']);
    } else if (this.route.snapshot.params.mode === '3') {
      this.router.navigate(['/register/image-done']);
    } else if (this.route.snapshot.params.mode === '4') {
      this.router.navigate(['/register/bvn-success/2']);
    }
  }
}
