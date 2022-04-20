import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/http/services/auth.service';
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
})
export class DoneComponent implements OnInit {
  source1 = 'assets/icon/royalL.png';
  imei = this.uid.IMEI;

  source = 'assets/icon/royalty.png';
  imageSrc = 'assets/icon/phoneA.png';
  id: any = localStorage.getItem('stageId');
  onboardingForm!: FormGroup;
  user: any = {};
  loading = true;
  constructor(
    private auth: AuthService,
    private router: Router,
    public toast: ToastrService,
    public navController: NavController,
    private uid: Uid,
    private androidPermissions: AndroidPermissions
  ) {
    this.getPermission();
  }
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
                UserName: res.data.userDetail.emailAddress
                  ? res.data.userDetail.emailAddress
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
                Verified: true,
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
                IsFinal: true,
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
              this.register();
              localStorage.setItem('stageId', '');
            } else {
              this.reloadCurrentRoute();
            }
          },
          (err) => {
            this.reloadCurrentRoute();
            this.router.navigate(['/register/become-royalty']);
          }
        );
    } else {
      this.router.navigate(['/register/become-royalty']);
    }

    return;
  }
  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  register() {
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

            // deal with register
            const data = {
              Channel: 'MobileApp',
              ChannelIdentifier: this.imei ? this.imei : '12345',
              UserId: this.id,
            };
            this.auth
              .post(data, 'UserManager.UserService.SaveUserChannel')
              .subscribe(
                (response: any) => {
                  this.loading = false;
                  console.log(response);
                  if (res.data.responseCode === '00') {
                    localStorage.setItem('stageId', '');
                  } else {
                  }
                },
                (err) => console.error(err.message)
              );
            console.log(res);
          } else {
            this.toast.error(res.data.responseMessage, 'Error');
            this.reloadCurrentRoute();
            console.log(res.data.responseMessage);
          }
        },
        (err) => {
          this.reloadCurrentRoute();
          console.error(err.message);
          this.loading = false;
        }
      );
  }

  ngOnInit() {
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
      Verified: new FormControl(true),
      AccountType: new FormControl(''),
      CompanyType: new FormControl(''),
      PassportUrl: new FormControl(''),
      HasBVN: new FormControl(false),
      Stage: new FormControl(5),
      IsFinal: new FormControl(true),
      BVN: new FormControl(''),
      Shares: new FormControl(false),
      TinNumber: new FormControl(''),
      RCNumber: new FormControl(''),
      CompanyName: new FormControl(''),
    });
  }
  sign() {
    this.router.navigate(['/login']);
  }
  create() {
    this.router.navigate(['/dashboard']);
  }
  getPermission() {
    this.androidPermissions
      .checkPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE)
      .then((res) => {
        if (res.hasPermission) {
        } else {
          this.androidPermissions
            .requestPermission(
              this.androidPermissions.PERMISSION.READ_PHONE_STATE
            )
            .then((response: any) => {
              alert('Persmission Granted Please Restart App!');
            })
            .catch((error) => {
              alert('Error! ' + error);
            });
        }
      })
      .catch((error) => {
        alert('Error! ' + error);
      });
  }
}
