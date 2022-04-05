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
              this.mode = res.data.userDetail.accountType;
              if (res.data.userDetail.hasBVN) {
                this.mode = 'basic';
              } else {
                this.mode = 'coporate';
              }
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
                Stage: 3,
                IsFinal: res.data.userDetail.isFinal,
                BVN: res.data.userDetail.bvn,
              });
              console.log(res);
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
            const fulname = res.data.fullName.split(' ');
            this.phone = res.data.phoneNo;
            this.onboardingForm.patchValue({
              FirstName: fulname[0],
              LastName: fulname[2],
              MiddleName: fulname[1],
              Phone: res.data.phoneNo,
              Email: res.data.emailAddress,
              DOB: res.data.dateOfBirth,
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
                this.router.navigate(['/register/details']);
              }
            } else {
              if (this.route.snapshot.params.mode === '4') {
                this.router.navigate([`/register/phone/${this.phone}/4`]);
                return;
              } else if (this.route.snapshot.params.mode === '2') {
                this.router.navigate([`/register/phone/${this.phone}/4`]);
                return;
              }
              this.router.navigate([`/register/phone/${this.phone}/1`]);
            }

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
      Stage: new FormControl(3),
      IsFinal: new FormControl(false),
      BVN: new FormControl(''),
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
      this.router.navigate(['/register/details']);
    }
  }

  next() {
    this.stage++;
  }
  verify() {
    if (this.route.snapshot.params.mode === '4') {
      this.router.navigate(['/register/phone/08161808893/4']);
      return;
    } else if (this.route.snapshot.params.mode === '2') {
      this.router.navigate(['/register/phone/08161808893/4']);
      return;
    }
    this.router.navigate(['/register/phone/08161808893/1']);
  }
}
