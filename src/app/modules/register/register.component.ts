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
      this.auth.getOnboardingStage(this.id).subscribe(
        (res: any) => {
          if (!res.hasError) {
            this.process = res.data;
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
    const {
      firstName,
      lastName,
      middleName,
      phone,
      email,
      dob,
      password,
      refCode,
      accountType,
      companyType,
      bvn,
      hasBVN,
      isVrifiedInfo,
      stage,
      isFinal,
      image,
    }: IOnboarding = this.onboardingForm.value;
    this.auth
      .onboarding({
        firstName,
        lastName,
        middleName,
        phone,
        email,
        dob,
        password,
        refCode,
        accountType,
        companyType,
        bvn,
        hasBVN,
        isVrifiedInfo,
        stage,
        isFinal,
        image,
      })
      .subscribe(
        (res: any) => {
          if (!res.hasError) {
            this.data = res.data;
            localStorage.setItem('onboardingId', res.data.id);
            // deal with register
            console.log(res);
          } else {
            console.log('Error happend');
          }
        },
        (err) => console.error(err.message)
      );
  }

  ngOnInit(): void {
    // register form
    // this.getOnboardingStage();
    this.onboardingForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      middleName: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      dob: new FormControl(''),
      password: new FormControl(''),
      refCode: new FormControl(''),
      accountType: new FormControl(''),
      companyType: new FormControl(''),
      bvn: new FormControl(''),
      hasBVN: new FormControl(false),
      isVrifiedInfo: new FormControl(false),
      stage: new FormControl(1),
      isFinal: new FormControl(false),
      image: new FormControl(''),
    });
    // console.log(this.onboardingForm.value);
  }
  continue(){
  }
}
