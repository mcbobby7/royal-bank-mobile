import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../core/http/services/auth.service';

@Component({
  selector: 'app-select-account-type',
  templateUrl: './select-account-type.component.html',
  styleUrls: ['./select-account-type.component.scss'],
})
export class SelectAccountTypeComponent implements OnInit {
  stage = 0;
  mode = 'Royal Basic';
  id: any = localStorage.getItem('stageId');
  onboardingForm!: FormGroup;
  loading = true;
  type;

  constructor(
    private auth: AuthService,
    private router: Router,
    public toast: ToastrService,
    public navController: NavController
  ) {}

  getOnboardingStage() {
    if (this.id) {
      this.auth
        .post({ UserId: this.id }, 'UserManager.UserService.FetchUserDetail')
        .subscribe(
          (res: any) => {
            this.loading = false;
            if (res.data.responseCode === '00') {
              // this.process = res.data.userDetail;
              this.mode = res.data.userDetail.accountType;
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
                Verified: res.data.userDetail.verified
                  ? res.data.userDetail.verified
                  : false,
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
    }
    this.loading = false;
  }

  // register method
  register() {
    console.log(this.onboardingForm.value);
    this.loading = true;
    let mode = 'UpdateUser';
    if (this.id) {
      mode = 'UpdateUser';
    } else {
      mode = 'CreateUser';
    }
    console.log(this.id);

    this.auth
      .post(this.onboardingForm.value, `UserManager.UserService.${mode}`)
      .subscribe(
        (res: any) => {
          if (res.data.responseCode === '00') {
            console.log(res.data.data.id);
            this.loading = false;
            // this.data = res.data;
            localStorage.setItem('stageId', res.data.data.id);
            if (this.mode === 'Royal Basic') {
              console.log(
                this.type,
                this.router?.getCurrentNavigation()?.extras?.state?.mode
              );
              this.router.navigate(['/register/bvn/1'], {
                state: {
                  mode: this.type,
                },
              });
            } else {
              this.router.navigate(['/register/cop-details'], {
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
        }
      );
  }

  ngOnInit(): void {
    // register form
    this.type = this.router?.getCurrentNavigation()?.extras?.state?.mode;
    console.log('type', this.type);

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
      Verified: new FormControl(false),
      AccountType: new FormControl(''),
      CompanyType: new FormControl(''),
      PassportUrl: new FormControl(''),
      HasBVN: new FormControl(false),
      Stage: new FormControl(2),
      IsFinal: new FormControl(false),
      BVN: new FormControl(''),
      Shares: new FormControl(false),
      TinNumber: new FormControl(''),
      RCNumber: new FormControl(''),
      CompanyName: new FormControl(''),
      Gender: new FormControl(''),
    });
    this.onboardingForm.patchValue({
      AccountType: this.mode,
    });
    // console.log(this.onboardingForm.value);
  }

  goBack() {
    if (this.stage === 0) {
      this.navController.back();
    } else {
      this.stage -= 1;
    }
  }
  setMode(mode) {
    this.mode = mode;
    this.onboardingForm.patchValue({
      AccountType: mode,
    });
    console.log(this.onboardingForm.value);
    console.log(
      'main mode',
      this.router?.getCurrentNavigation()?.extras?.state?.mode
    );
  }
  next() {
    console.log(
      'main mode',
      this.router?.getCurrentNavigation()?.extras?.state?.mode
    );

    if (this.mode === 'basic') {
      this.router.navigate(['/register/bvn/1'], {
        state: {
          mode: this.type,
        },
      });
    } else {
      this.router.navigate(['/register/cop-details'], {
        state: {
          mode: this.type,
        },
      });
    }
  }
}
