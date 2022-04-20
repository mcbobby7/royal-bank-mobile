import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/http/services/auth.service';
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
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
              console.log(res);
              this.sendOtp();
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
    this.bvnError = false;
    this.loading = true;
    this.auth
      .post(
        { UserId: +this.id, EmailorPhonenumber: this.user.emailAddress },
        'UserManager.UserService.SendOtp'
      )
      .subscribe(
        (res: any) => {
          this.loading = false;
          console.log(res);

          if (res.status === '00') {
            this.otp = res.data.data.otp;
            this.toast.success('OTP sent to your Email', 'Thanks');
          } else {
            this.bvnError = true;
          }
        },
        (err) => console.error(err.message)
      );
  }

  verifyOtp() {
    this.loading = true;
    this.bvnError = false;
    console.log(this.otp, this.enOTP);
    this.auth
      .post(
        { EmailorPhonenumber: this.user.emailAddress, Otp: this.enOTP },
        'UserManager.UserService.ValidateOtp'
      )
      .subscribe(
        (res: any) => {
          this.loading = false;
          console.log(res);

          if (res.data.responseCode === '00') {
            if (this.route.snapshot.params.mode === '3') {
              this.router.navigate(['/register/phone/098897776667/3']);
            } else {
              this.router.navigate(['/register/phone/098897776667/2']);
            }
          } else {
            this.bvnError = true;
          }
        },
        (err) => console.error(err.message)
      );
  }

  goBack() {
    if (this.stage === 0) {
      this.navController.back();
    } else {
      this.stage -= 1;
    }
  }
  next() {}
}
