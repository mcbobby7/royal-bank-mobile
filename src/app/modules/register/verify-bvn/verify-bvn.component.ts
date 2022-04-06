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
        .post({ userId: this.id }, 'UserManager.UserService.FetchUserDetail')
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
                id: +this.id,
                firstName: res.data.userDetail.firstName,
                lastName: res.data.userDetail.lastName,
                middleName: res.data.userDetail.middleName,
                userName: res.data.userDetail.userName,
                phone: res.data.userDetail.phoneNo,
                email: res.data.userDetail.emailAddress,
                password: res.data.userDetail.password,
                createBankAccount: res.data.userDetail.createBankAccount,
                dob: res.data.userDetail.dob,
                refCode: res.data.userDetail.refCode,
                verified: res.data.userDetail.verified,
                accountType: res.data.userDetail.accountType,
                companyType: res.data.userDetail.companyType,
                passportUrl: res.data.userDetail.passportUrl,
                hasBVN: res.data.userDetail.hasBVN,
                stage: 3,
                isFinal: res.data.userDetail.isFinal,
                bvn: res.data.userDetail.bvn,
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
              firstName: fulname[0],
              lastName: fulname[2],
              middleName: fulname[1],
              phone: res.data.phoneNo,
              email: res.data.emailAddress,
              dob: res.data.dateOfBirth,
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
      id: new FormControl(+this.id),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      middleName: new FormControl(''),
      userName: new FormControl('a'),
      phone: new FormControl('875'),
      email: new FormControl(''),
      password: new FormControl(''),
      createBankAccount: new FormControl(true),
      dob: new FormControl(''),
      refCode: new FormControl(''),
      verified: new FormControl(false),
      accountType: new FormControl(''),
      companyType: new FormControl(''),
      passportUrl: new FormControl(''),
      hasBVN: new FormControl(false),
      stage: new FormControl(3),
      isFinal: new FormControl(false),
      bvn: new FormControl(''),
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
        hasBVN: true,
      });
    } else {
      this.onboardingForm.patchValue({
        hasBVN: false,
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
