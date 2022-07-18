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
  page = 'finish';
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
  constructor(
    private auth: AuthService,
    private router: Router,
    public toast: ToastrService,
    public alertController: AlertController
  ) {}

  // register method
  sanitize() {
    console.log(this.confirmPass);
    console.log(this.onboardingForm.value);

    if (!this.onboardingForm.value.Phone) {
      this.toast.error('Mobile number is required', 'Error');
      return false;
    }
    if (!this.onboardingForm.value.Email) {
      this.toast.error('Email is required', 'Error');
      return false;
    }
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
  register() {
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
    this.auth
      .post(this.onboardingForm.value, 'UserManager.UserService.CreateUser')
      .subscribe(
        (res: any) => {
          this.loading = false;
          if (res.data.responseCode === '00') {
            console.log(res.data.data.id);
            // this.data = res.data;
            localStorage.setItem('stageId', res.data.data.id);
            if (this.onboardingForm.value.AccountType === 'Royal Basic') {
              this.router.navigate(['/register/bvn/1'], {
                state: { mode: 'nuban' },
              });
            } else {
              this.router.navigate(['/register/cop-details'], {
                state: { mode: 'nuban' },
              });
            }
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
            this.register();
          },
        },
        {
          text: 'Email',
          handler: () => {
            console.log('phone Ok');
            this.path = 'email';
            this.register();
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
      CreateBankAccount: new FormControl(true),
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
            this.loading = false;
            console.log(res);

            if (res.data.responseCode === '00') {
              this.onboardingForm.patchValue({
                Email: res.data.data.data.clientDetails.emailAddress,
                UserName: res.data.data.data.clientDetails.emailAddress,
                FirstName: res.data.data.data.clientDetails.firstname,
                LastName: res.data.data.data.clientDetails.lastname,
                Phone: res.data.data.data.clientDetails.mobileNumber,
                AccountType:
                  res.data.data.data.clientDetails.clientTier.tierName ===
                  'Tier 1'
                    ? 'Royal Basic'
                    : 'Royal Corporate',
              });
              this.register();
              console.log(this.onboardingForm.value);
            } else {
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
    this.router.navigate(['/register/email/2']);
  }
}
