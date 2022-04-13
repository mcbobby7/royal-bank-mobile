import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/http/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IOnboarding } from '../../../core/interfaces/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-become-royalty',
  templateUrl: './become-royalty.component.html',
  styleUrls: ['./become-royalty.component.scss'],
})
export class BecomeRoyaltyComponent implements OnInit {
  source = 'assets/icon/royalty.png';
  data: any;
  stage = 1;
  id: any = localStorage.getItem('stageId');
  process: any;
  onboardingForm!: FormGroup;
  loading = true;
  show = false;
  imageSrc = 'assets/icon/hey.png';
  constructor(
    private auth: AuthService,
    private router: Router,
    public toast: ToastrService
  ) {}

  getOnboardingStage() {
    if (this.id) {
      this.auth
        .post({ UserId: this.id }, 'UserManager.UserService.FetchUserDetail')
        .subscribe(
          (res: any) => {
            this.loading = false;
            if (res.data.responseCode === '00') {
              this.process = res.data.userDetail;
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
            } else {
              console.log(res);
              this.router.navigate(['/welcome']);
              this.toast.error('Please try again', 'Error');
            }
          },
          (err) => {
            this.router.navigate(['/register']);
            this.toast.error('Please try again', 'Error');
          }
        );
    } else {
      this.id = '';
      this.loading = false;
    }
    return;
  }

  // register method
  register() {
    console.log(this.onboardingForm.value);

    this.auth
      .post(this.onboardingForm.value, 'UserManager.UserService.UpdateUser')
      .subscribe(
        (res: any) => {
          if (res.data.responseCode === '00') {
            console.log(res.data.data.id);

            this.data = res.data;
            localStorage.setItem('stageId', res.data.data.id);
            this.router.navigate(['/register/select-account']);

            // deal with register
            console.log(res);
          } else {
            console.log(res.data.responseMessage);
          }
        },
        (err) => console.error(err.message)
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
      AccountType: new FormControl('Corporate'),
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
    });
    // console.log(this.onboardingForm.value);
  }
  next() {
    this.router.navigate(['/register/select-account']);
  }
}
