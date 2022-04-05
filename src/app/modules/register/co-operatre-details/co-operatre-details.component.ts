import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/http/services/auth.service';

@Component({
  selector: 'app-co-operatre-details',
  templateUrl: './co-operatre-details.component.html',
  styleUrls: ['./co-operatre-details.component.scss'],
})
export class CoOperatreDetailsComponent implements OnInit {
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
                FirstName: res.data.userDetail.firstName,
                LastName: res.data.userDetail.lastName,
                MiddleName: res.data.userDetail.middleName,
                UserName: res.data.userDetail.userName,
                Phone: res.data.userDetail.phoneNo,
                Email: res.data.userDetail.emailAddress,
                Password: res.data.userDetail.password,
                CreateBankAccount: res.data.userDetail.createBankAccount,
                DOB: res.data.userDetail.dob,
                RefCode: res.data.userDetail.refCode,
                Verified: res.data.userDetail.verified,
                AccountType: res.data.userDetail.accountType,
                CompanyType: res.data.userDetail.companyType,
                PassportUrl: res.data.userDetail.passportUrl,
                HasBVN: res.data.userDetail.hasBVN,
                Stage: res.data.userDetail.stage,
                IsFinal: res.data.userDetail.isFinal,
                BVN: res.data.userDetail.bvn,
              });
              console.log(res);
              console.log(this.onboardingForm.value);
            } else {
              console.log(res);
              this.router.navigate(['/register']);
              this.toast.error('Please try again', 'Error');
            }
          },
          (err) => {
            this.router.navigate(['/register']);
            this.toast.error('Please try again', 'Error');
          }
        );
    }
    return;
  }
  sanitize() {
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
  }

  // register method
  register() {
    if (this.sanitize() === false) {
      return;
    }
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
            this.router.navigate(['/register/email/3']);

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
      AccountType: new FormControl(''),
      CompanyType: new FormControl(''),
      PassportUrl: new FormControl(''),
      HasBVN: new FormControl(false),
      Stage: new FormControl(2),
      IsFinal: new FormControl(false),
      BVN: new FormControl(''),
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
    this.router.navigate(['/register/email/3']);
  }
}
