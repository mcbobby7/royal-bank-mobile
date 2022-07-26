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
  type;
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
              this.onboardingForm.patchValue({
                Id: +this.id,
                FirstName: res.data.userDetail.firstName
                  ? res.data.userDetail.firstName
                  : '',
                LastName: res.data.userDetail.lastName
                  ? res.data.userDetail.lastName
                  : '',
                MiddleName: res.data.userDetail.middleName
                  ? res.data.userDetail.middleName
                  : '',
                UserName: res.data.userDetail.userName
                  ? res.data.userDetail.userName
                  : '',
                Phone: res.data.userDetail.phoneNo
                  ? res.data.userDetail.phoneNo
                  : '',
                Email: res.data.userDetail.emailAddress
                  ? res.data.userDetail.emailAddress
                  : '',
                Password: res.data.userDetail.password
                  ? res.data.userDetail.password
                  : '',
                CreateBankAccount: false,
                DOB: res.data.userDetail.dob ? res.data.userDetail.dob : '',
                RefCode: res.data.userDetail.refCode
                  ? res.data.userDetail.refCode
                  : '',
                Verified: true,
                AccountType: res.data.userDetail.accountType
                  ? res.data.userDetail.accountType
                  : '',
                CompanyType: res.data.userDetail.companyType
                  ? res.data.userDetail.companyType
                  : '',
                PassportUrl: res.data.userDetail.passportUrl
                  ? res.data.userDetail.passportUrl
                  : '',
                HasBVN: res.data.userDetail.hasBVN
                  ? res.data.userDetail.hasBVN
                  : false,
                Stage: 2,
                IsFinal: res.data.userDetail.isFinal
                  ? res.data.userDetail.isFinal
                  : false,
                BVN: res.data.userDetail.bvn ? res.data.userDetail.bvn : '',
                Shares: res.data.userDetail.shares
                  ? res.data.userDetail.shares
                  : false,
                TinNumber: res.data.userDetail.tinNumber
                  ? res.data.userDetail.tinNumber
                  : '',
                RCNumber: res.data.userDetail.rcNumber
                  ? res.data.userDetail.rcNumber
                  : '',
                CompanyName: res.data.userDetail.companyName
                  ? res.data.userDetail.companyName
                  : '',
                Gender: res.data.userDetail.gender
                  ? res.data.userDetail.gender
                  : '',
              });
              console.log(res);
              this.sendOtp();
            } else {
              console.log(res);
              this.router.navigate(['/register/become-royalty'], {
                state: {
                  mode: this.router?.getCurrentNavigation()?.extras?.state
                    ?.mode,
                },
              });
              this.toast.error('Please try again', 'Error');
            }
          },
          (err) => {
            this.router.navigate(['/register/become-royalty'], {
              state: {
                mode: this.type,
              },
            });
            this.toast.error('Please try again', 'Error');
          }
        );
    } else {
      this.router.navigate(['/register/become-royalty'], {
        state: {
          mode: this.type,
        },
      });
    }
    return;
  }

  ngOnInit(): void {
    this.type = this.router?.getCurrentNavigation()?.extras?.state?.mode;
    console.log('type', this.type);

    // register form
    this.getOnboardingStage();
    this.onboardingForm = new FormGroup({
      Id: new FormControl(+this.id),
      FirstName: new FormControl(''),
      LastName: new FormControl(''),
      MiddleName: new FormControl(''),
      UserName: new FormControl(''),
      Phone: new FormControl(''),
      Email: new FormControl(''),
      Password: new FormControl(''),
      CreateBankAccount: new FormControl(false),
      DOB: new FormControl(''),
      RefCode: new FormControl(''),
      Verified: new FormControl(true),
      AccountType: new FormControl(''),
      CompanyType: new FormControl(''),
      PassportUrl: new FormControl(''),
      HasBVN: new FormControl(false),
      Stage: new FormControl(3),
      IsFinal: new FormControl(false),
      BVN: new FormControl(''),
      Shares: new FormControl(false),
      TinNumber: new FormControl(''),
      RCNumber: new FormControl(''),
      CompanyName: new FormControl(''),
      Gender: new FormControl(''),
    });
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

          if (res.data.responseCode === '00') {
            this.otp = res.data.data.otp;
            this.toast.success('OTP sent to your Email', 'Thanks');
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
            this.auth
              .post(
                this.onboardingForm.value,
                'UserManager.UserService.UpdateUser'
              )
              .subscribe(
                (res: any) => {
                  if (res.data.responseCode === '00') {
                    console.log(res.data.data.id);
                    this.loading = false;
                    // this.data = res.data;
                    localStorage.setItem('stageId', res.data.data.id);

                    if (this.route.snapshot.params.mode === '3') {
                      this.router.navigate(['/register/image-done'], {
                        state: {
                          mode: this.type,
                        },
                      });
                    } else {
                      this.router.navigate(['/register/image'], {
                        state: {
                          mode: this.type,
                        },
                      });
                    }
                    // deal with register
                    console.log(res);
                  } else {
                    this.toast.error(res.data.responseMessage, 'Error');
                  }
                },
                (err) => {
                  this.toast.error('Error please try Again', 'Error');
                  this.loading = false;
                  this.bvnError = true;
                }
              );
          } else {
            this.bvnError = true;
            this.loading = false;
          }
        },
        (err) => {
          this.toast.error('Check your internet connection', 'Error');
          this.loading = false;
        }
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
