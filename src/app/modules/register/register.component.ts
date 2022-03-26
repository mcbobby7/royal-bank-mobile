import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/http/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IOnboarding } from '../../core/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  source = 'assets/icon/royalty.png';
  data: any;
  stage = 1;
  id: any = localStorage.getItem('onboardingId');
  process: any;
  onboardingForm!: FormGroup;
  loading = true;
  show = false;
  signupForm = new FormGroup({
    accountType: new FormControl(''),
    password: new FormControl(''),
  });
  imageSrc = 'assets/icon/hey.png';
  constructor(private auth: AuthService, private router: Router) {}

  getOnboardingStage() {
    if (this.id) {
      console.log('run', this.id);

      this.auth
        .post({ UserId: this.id }, 'UserManager.UserService.FetchUserDetail')
        .subscribe(
          (res: any) => {
            this.loading = false;
            if (res.data.responseCode === '00') {
              this.process = res.data.userDetail;
              if (res.data.userDetail.stage <= 1) {
                this.router.navigate(['/register/become-royalty']);
              } else if (res.data.userDetail.stage === 2) {
                this.router.navigate(['/register/select-account']);
              }
              console.log(res);
            } else {
              this.loading = false;
              console.log(res);
            }
          },
          (err) => console.error(err.message)
        );
    }
    return;
  }

  // register method
  register() {
    this.auth
      .post(this.onboardingForm.value, 'UserManager.UserService.CreateUser')
      .subscribe(
        (res: any) => {
          if (res.data.responseCode === '00') {
            this.data = res.data;
            localStorage.setItem('onboardingId', res.data.id);
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
      Stage: new FormControl(1),
      IsFinal: new FormControl(false),
      BVN: new FormControl(''),
    });
    // console.log(this.onboardingForm.value);
  }
  continue() {
    this.router.navigate(['select-account']);
  }
}
