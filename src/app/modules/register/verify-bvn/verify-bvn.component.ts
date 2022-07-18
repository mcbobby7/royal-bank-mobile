import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { IOnboarding } from '../../../core/interfaces/user';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/http/services/auth.service';

@Component({
  selector: 'app-verify-bvn',
  templateUrl: './verify-bvn.component.html',
  styleUrls: ['./verify-bvn.component.scss'],
})
export class VerifyBvnComponent implements OnInit {
  mode = 'basic';
  page = 'select';
  id: any = localStorage.getItem('stageId');
  onboardingForm: FormGroup;
  loading = true;
  phone;
  type;
  constructor(
    private auth: AuthService,
    private router: Router,
    public toast: ToastrService,
    public navController: NavController,
    public route: ActivatedRoute
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
              this.mode = res.data.userDetail.hasBVN ? 'basic' : 'coporate';
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
                CreateBankAccount: true,
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
                Stage: 3,
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
      this.router.navigate(['/register/become-royalty'], {
        state: {
          mode: this.type,
        },
      });
    }
    this.loading = false;
  }

  validateBVN() {
    this.loading = true;
    this.auth
      .post(
        { bvn: this.onboardingForm.value.BVN, show_detail: true },
        'Nibss.BvnService.ValidateBvn'
      )
      .subscribe(
        (res: any) => {
          this.loading = false;
          if (res.status === '00') {
            console.log(res);
            const fulname = res.data.fullName.split(' ');
            this.phone = res.data.phoneNo;
            console.log(res.data.phoneNo);

            this.onboardingForm.patchValue({
              FirstName: fulname[0],
              LastName: fulname[2],
              MiddleName: fulname[1],
              Phone: res.data.phoneNo,
              Email: res.data.emailAddress,
              DOB: res.data.dateOfBirth,
              Gender: res.data.gender,
            });

            this.register();
            // deal with register
          } else {
            this.bvnError = true;
          }
        },
        (err) => console.error(err.message)
      );
  }

  // register method
  register() {
    console.log(this.onboardingForm.value);
    this.loading = true;
    this.onboardingForm.patchValue({
      UserName: this.onboardingForm.value.Email,
    });
    this.auth
      .post(this.onboardingForm.value, 'UserManager.UserService.UpdateUser')
      .subscribe(
        (res: any) => {
          if (res.data.responseCode === '00') {
            console.log(res.data.data.id);
            this.loading = false;
            // this.data = res.data;
            localStorage.setItem('stageId', res.data.data.id);
            if (this.page === 'select') {
              if (this.mode === 'basic') {
                this.page = 'verify';
              } else {
                this.router.navigate(['/register/details'], {
                  state: {
                    mode: this.type,
                  },
                });
              }
            } else {
              if (this.route.snapshot.params.mode === '4') {
                this.router.navigate([`/register/phone/${this.phone}/4`], {
                  state: {
                    mode: this.type,
                  },
                });
                return;
              } else if (this.route.snapshot.params.mode === '2') {
                this.router.navigate([`/register/phone/${this.phone}/4`], {
                  state: {
                    mode: this.type,
                  },
                });
                return;
              }
              this.router.navigate([`/register/phone/${this.phone}/1`], {
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

    let mode = '';
    mode = this.router?.getCurrentNavigation()?.extras?.state?.mode;
    console.log('mode', mode);

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
      CreateBankAccount: new FormControl(true),
      DOB: new FormControl(''),
      RefCode: new FormControl(''),
      Verified: new FormControl(false),
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
  stage = 0;
  bvnError = false;

  goBack() {
    if (this.page === 'select') {
      this.navController.back();
    } else {
      this.page = 'select';
    }
  }
  setMode(mode) {
    console.log(mode);

    this.mode = mode;
    if (mode === 'basic') {
      this.onboardingForm.patchValue({
        HasBVN: true,
      });
    } else {
      this.onboardingForm.patchValue({
        HasBVN: false,
      });
    }
    console.log(this.onboardingForm.value);
  }

  goNext() {
    if (this.mode === 'basic') {
      this.page = 'verify';
    } else {
      this.router.navigate(['/register/details'], {
        state: {
          mode: this.type,
        },
      });
    }
  }

  next() {
    this.stage++;
  }
  verify() {
    if (this.route.snapshot.params.mode === '4') {
      this.router.navigate(['/register/phone/08161808893/4'], {
        state: {
          mode: this.type,
        },
      });
      return;
    } else if (this.route.snapshot.params.mode === '2') {
      this.router.navigate(['/register/phone/08161808893/4'], {
        state: {
          mode: this.type,
        },
      });
      return;
    }
    this.router.navigate(['/register/phone/08161808893/1'], {
      state: {
        mode: this.type,
      },
    });
  }
}
