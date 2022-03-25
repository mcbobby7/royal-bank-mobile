import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/http/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IOnboarding } from '../../core/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  data: any;
  stage = 1;
  id: any = localStorage.getItem('onboardingId');
  process: any;
  onboardingForm!: FormGroup;
  constructor(private auth: AuthService) {}

  getOnboardingStage() {
    if (this.id) {
      this.auth
        .post({ UserId: 9 }, 'UserManager.UserService.FetchUserDetail')
        .subscribe(
          (res: any) => {
            if (res.data.responseCode === '00') {
              this.process = res.data.userDetail;
              console.log(res);
            } else {
              console.log('Error happend');
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
    // this.getOnboardingStage();
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
    this.register();
    // console.log(this.onboardingForm.value);
  }
}
