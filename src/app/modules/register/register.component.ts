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
  id: any = localStorage.getItem('stageId');
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
    console.log('run', this.id);

    if (this.id) {
      this.auth
        .post({ UserId: this.id }, 'UserManager.UserService.FetchUserDetail')
        .subscribe(
          (res: any) => {
            this.loading = false;
            if (res.data.responseCode === '00') {
              this.process = res.data.userDetail;
              this.router.navigate(['/register/become-royalty']);

              console.log(res);
            } else {
              this.loading = false;
              console.log(res);
              this.router.navigate(['/register/become-royalty']);
            }
          },
          (err) => {
            console.error(err.message);
            this.router.navigate(['/register/become-royalty']);
          }
        );
    } else {
      this.router.navigate(['/register/become-royalty']);
    }
    return;
  }

  // register method

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
      Shares: new FormControl(false),
      TinNumber: new FormControl(''),
      RCNumber: new FormControl(''),
      CompanyName: new FormControl(''),
    });
    // console.log(this.onboardingForm.value);
  }
  continue() {
    this.router.navigate(['select-account']);
  }
}
