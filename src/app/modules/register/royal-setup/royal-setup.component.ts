import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/http/services/auth.service';

@Component({
  selector: 'app-royal-setup',
  templateUrl: './royal-setup.component.html',
  styleUrls: ['./royal-setup.component.scss'],
})
export class RoyalSetupComponent implements OnInit {
  imageSrc = 'assets/icon/hey.png';
  show = false;
  page = 'select';
  confirmPass: '';
  id: any = localStorage.getItem('stageId');
  onboardingForm!: FormGroup;
  loading = true;
  user: any = {};

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
              });
              console.log(res);
              console.log(this.onboardingForm.value);
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
  sanitize() {
    if (!this.onboardingForm.value.CompanyType) {
      this.toast.error('Company Type number is required', 'Error');
      return false;
    }
    if (!this.onboardingForm.value.CompanyName) {
      this.toast.error('Company Name is required', 'Error');
      return false;
    }
    if (!this.onboardingForm.value.RCNumber) {
      this.toast.error('RC Number is required', 'Error');
      return false;
    }
    if (!this.onboardingForm.value.TinNumber) {
      this.toast.error('TIN is required', 'Error');
      return false;
    }
  }

  // register method
  register() {
    if (this.sanitize() === false) {
      return;
    }
    this.onboardingForm.patchValue({
      UserName: this.onboardingForm.value.Email,
      Stage: 5,
    });
    this.loading = true;
    console.log(this.onboardingForm.value);
    this.loading = true;
    this.auth
      .post(this.onboardingForm.value, 'UserManager.UserService.UpdateUser')
      .subscribe(
        (res: any) => {
          this.loading = false;
          if (res.data.responseCode === '00') {
            console.log(res.data.data.id);
            this.loading = false;
            // this.data = res.data;
            localStorage.setItem('stageId', res.data.data.id);
            this.router.navigate(['/register/bvn/2']);

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
    this.getOnboardingStage();
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
      // CompanyType: new FormControl(''),
    });
    // console.log(this.onboardingForm.value);
  }
  goBack() {
    this.navController.back();
  }
  viewpassword() {
    this.show = !this.show;
  }
  next() {
    this.router.navigate(['/register/bvn/2']);
  }
}
