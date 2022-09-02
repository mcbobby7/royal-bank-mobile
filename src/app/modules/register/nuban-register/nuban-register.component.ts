import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/http/services/auth.service';
import { IOnboarding } from '../../../core/interfaces/user';
import { ToastrService } from 'ngx-toastr';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nuban-register',
  templateUrl: './nuban-register.component.html',
  styleUrls: ['./nuban-register.component.scss'],
})
export class NubanRegisterComponent implements OnInit {
  imageSrc = 'assets/icon/hey.png';
  page = 'account';
  show = false;
  data: any;
  stage = 1;
  id: any = localStorage.getItem('stageId');
  process: any;
  onboardingForm!: FormGroup;
  loading = false;
  confirmPass;
  path = 'phone';
  account: string;
  type;
  user;
  check = [];
  newUser;
  whatIs;
  companyType = [
    'Limited liability company',
    'Corporation',
    'Sole proprietorship',
    'Partnership',
  ];
  constructor(
    private auth: AuthService,
    private router: Router,
    public toast: ToastrService,
    public alertController: AlertController
  ) {}

  // register method
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
  sanitize() {
    console.log(this.confirmPass);
    console.log(this.onboardingForm.value);

    if (this.onboardingForm.value.Password !== this.confirmPass) {
      this.toast.error('Paasword must match confirm password', 'Error');
      return false;
    }
    if (!this.onboardingForm.value.Password) {
      this.toast.error('Paasword is required', 'Error');
      return false;
    }
    if (!this.onboardingForm.value.Phone) {
      this.toast.error('Mobile number is required', 'Error');
      return false;
    }
    if (!this.onboardingForm.value.Email) {
      this.toast.error('Email is required', 'Error');
      return false;
    }
    if (!this.onboardingForm.value.FirstName) {
      this.toast.error('First name is required', 'Error');
      return false;
    }
    if (!this.onboardingForm.value.LastName) {
      this.toast.error('Last name is required', 'Error');
      return false;
    }
    if (!this.onboardingForm.value.MiddleName) {
      this.toast.error('Middle name is required', 'Error');
      return false;
    }
    if (!this.onboardingForm.value.Gender) {
      this.toast.error('Gender is required', 'Error');
      return false;
    }

    if (
      this.whatIs === 'ROYAL CORPORATE' ||
      this.whatIs === 'Royal Corporate'
    ) {
      if (!this.onboardingForm.value.TinNumber) {
        this.toast.error('Tin Number is required', 'Error');
        return false;
      }
      if (!this.onboardingForm.value.RCNumber) {
        this.toast.error('RC Number is required', 'Error');
        return false;
      }
      if (!this.onboardingForm.value.CompanyName) {
        this.toast.error('Company Name is required', 'Error');
        return false;
      }
    }

    if (!this.onboardingForm.value.terms) {
      this.toast.error('Accept privacy and policy to continue', 'Error');
      return false;
    }
  }

  getOnboardingStage(id: any) {
    this.loading = true;
    this.auth
      .post({ UserId: id }, 'UserManager.UserService.FetchUserDetail')
      .subscribe(
        (res: any) => {
          this.loading = false;
          if (res.data.responseCode === '00') {
            this.page = 'details';
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
            this.whatIs = res.data.userDetail.accountType;
            console.log(' account type', res.data.userDetail.accountType);
            console.log(res);
            console.log(this.onboardingForm.value);
            this.page = 'details';
          } else {
            console.log(res);
            this.continue();
            this.toast.error('Please try again', 'Error');
          }
        },
        (err) => {
          this.toast.error('Please try again', 'Error');
        }
      );
    return;
  }
  // sanitize2() {
  //   if (!this.onboardingForm.value.FirstName) {
  //     this.toast.error('First name is required', 'Error');
  //     return false;
  //   }
  //   if (!this.onboardingForm.value.LastName) {
  //     this.toast.error('Last name is required', 'Error');
  //     return false;
  //   }
  //   if (!this.onboardingForm.value.MiddleName) {
  //     this.toast.error('Middle name is required', 'Error');
  //     return false;
  //   }
  // }

  // register method
  register(type) {
    if (this.onboardingForm.value.Phone.length === 14) {
      this.onboardingForm.patchValue({
        Phone: this.onboardingForm.value.Phone.substring(1),
      });
    } else if (this.onboardingForm.value.Phone.length === 11) {
      this.onboardingForm.patchValue({
        Phone: '234' + this.onboardingForm.value.Phone.substring(1),
      });
    } else if (this.onboardingForm.value.Phone.length === 10) {
      this.onboardingForm.patchValue({
        Phone: '234' + this.onboardingForm.value.Phone,
      });
    } else if (this.onboardingForm.value.Phone.length === 13) {
      this.onboardingForm.patchValue({
        Phone: this.onboardingForm.value.Phone,
      });
    } else {
      this.toast.error('Please provide a valid mobile number', 'Error');
      return false;
    }
    this.onboardingForm.patchValue({
      UserName: this.onboardingForm.value.Email,
      Stage: 5,
    });
    console.log(this.onboardingForm.value);
    this.loading = true;
    const mode = type === 1 ? 'CreateUser' : 'UpdateUser';
    this.auth
      .post(this.onboardingForm.value, `UserManager.UserService.${mode}`)
      .subscribe(
        (res: any) => {
          this.loading = false;
          if (res.data.responseCode === '00') {
            console.log(res.data.data.id);
            // this.data = res.data;
            localStorage.setItem('stageId', res.data.data.id);
            if (type === 1) {
              this.page = 'details';
            } else {
              if (this.path === 'phone') {
                this.router.navigate(
                  [`/register/phone/${this.onboardingForm.value.Phone}/1`],
                  {
                    state: {
                      mode: 'nuban',
                    },
                  }
                );
              } else {
                this.router.navigate([`/register/email/1`], {
                  state: {
                    mode: 'nuban',
                  },
                });
              }
            }
            // if (this.onboardingForm.value.AccountType === 'Royal Basic') {
            //   this.router.navigate(['/register/bvn/1'], {
            //     state: { mode: 'nuban' },
            //   });
            // } else {
            //   this.router.navigate(['/register/cop-details'], {
            //     state: { mode: 'nuban' },
            //   });
            // }
            console.log(res);
          } else {
            this.loading = false;
            this.alert(res.data.responseMessage, 'Error');

            console.log('why you aint working');
          }
        },
        (err) => {
          this.toast.error('Error please try Again', 'Error');
          this.loading = false;
        }
      );
  }

  async presentAlertPrompt() {
    if (!this.sanitize) {
      return;
    }
    if (this.check.length < 4) {
      this.toast.error(
        'password should contain lowercase, uppercase, number and minimum of 6 characters',
        'Error'
      );
      return;
    }
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Verify Details',
      // subHeader: 'Subtitle',
      message: 'How would you like to receive OTP to verify your details?',
      buttons: [
        {
          text: 'Phone',
          handler: () => {
            console.log('phone Ok');
            this.path = 'phone';
            this.register(2);
          },
        },
        {
          text: 'Email',
          handler: () => {
            console.log('phone Ok');
            this.path = 'email';
            this.register(2);
          },
        },
      ],
    });

    await alert.present();
  }

  async continue() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Continue Registration',
      // subHeader: 'Subtitle',
      message: 'do you want to continue from where you stopped?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('phone Ok');
            this.getOnboardingStage(this.id);
          },
        },
        {
          text: 'No',
          handler: () => {
            console.log('phone Ok');
          },
        },
      ],
    });

    await alert.present();
  }

  async alert(message, mode) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: mode,
      // subHeader: 'Subtitle',
      message,
    });

    await alert.present();
  }

  ngOnInit(): void {
    // register form
    const id = localStorage.getItem('stageId');
    const ids = id ? id : null;
    console.log('id', id);

    if (ids) {
      console.log('yes');

      this.continue();
    }
    this.type = this.router?.getCurrentNavigation()?.extras?.state?.mode;
    console.log('type', this.type);

    this.onboardingForm = new FormGroup({
      Id: new FormControl(+this.id),
      FirstName: new FormControl(''),
      LastName: new FormControl(''),
      MiddleName: new FormControl(''),
      UserName: new FormControl('a'),
      Phone: new FormControl('875'),
      Email: new FormControl(''),
      Password: new FormControl(''),
      CreateBankAccount: new FormControl(false),
      DOB: new FormControl(''),
      RefCode: new FormControl(''),
      Verified: new FormControl(false),
      AccountType: new FormControl('Corporate'),
      CompanyType: new FormControl(''),
      PassportUrl: new FormControl(''),
      HasBVN: new FormControl(false),
      Stage: new FormControl(5),
      IsFinal: new FormControl(false),
      BVN: new FormControl(''),
      Shares: new FormControl(false),
      TinNumber: new FormControl(''),
      RCNumber: new FormControl(''),
      CompanyName: new FormControl(''),
      Gender: new FormControl('Male'),
      terms: new FormControl(false),
    });
    // console.log(this.onboardingForm.value);
  }

  fetchUser(e) {
    console.log(e);

    // console.log(e.padStart(num.toString().length, 0));
    if (e.length === 10) {
      this.loading = true;
      this.auth
        .post({ accountNo: e }, 'Cba.BankingService.SearchByNuban')
        .subscribe(
          (res: any) => {
            console.log(res);

            if (res.data.responseCode === '00') {
              this.newUser = res.data;
              this.whatIs = res.data.data.data.accountType;
              this.saveExistingUser(res.data.data.data);
              console.log('account type', this.whatIs);
            } else {
              this.loading = false;
              this.toast.error('Account not found', 'Error');
            }
          },
          (err) => {
            this.toast.error('Check your internet connection', 'Error');
            this.loading = false;
          }
        );
    } else {
      return;
    }
  }

  saveExistingUser(data: any) {
    this.auth
      .post(data, 'UserManager.UserService.SaveExistingCustomer')
      .subscribe(
        (res: any) => {
          console.log(res);

          if (res.data.responseCode === '00') {
            this.newUser = res.data;
            this.getOnboardingStage(res.data.data.id);
            localStorage.setItem('stageId', res.data.data.id);
            this.onboardingForm.patchValue({
              Id: res.data.data.id,
            });
            this.id = res.data.data.id;
            console.log(this.onboardingForm.value);
          } else {
            this.loading = false;
            this.toast.error(res.data.responseMessage, 'Error');
          }
        },
        (err) => {
          this.toast.error('Check your internet connection', 'Error');
          this.loading = false;
        }
      );
  }

  viewpassword() {
    this.show = !this.show;
  }
  change(mode) {
    // if (this.sanitize2() === false) {
    //   return;
    // }
    this.page = mode;
  }
  next() {
    this.register(2);
  }
}
