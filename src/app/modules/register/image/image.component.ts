import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../../core/services/photo.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/http/services/auth.service';
import { NavController } from '@ionic/angular';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  imageSrc = 'assets/icon/hey.png';
  source = 'assets/icon/royalty.png';
  page = 'take';
  id: any = localStorage.getItem('stageId');
  onboardingForm!: FormGroup;
  loading = true;
  user: any = {};
  base64;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  baseImage = '';
  image: string;
  base64Str: any;
  kbytes: number;
  type;
  constructor(
    private auth: AuthService,
    private router: Router,
    public toast: ToastrService,
    public navController: NavController,
    public photo: PhotoService
  ) {}

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    console.log(event);
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    /* show cropper */
  }
  cropperReady() {
    /* cropper ready */
  }
  loadImageFailed() {
    /* show message */
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
                CreateBankAccount: false,
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
                Gender: res.data.userDetail.gender
                  ? res.data.userDetail.gender
                  : '',
              });
              console.log(res);
              console.log(this.onboardingForm.value);
            } else {
              console.log(res);
              this.router.navigate(['/register/become-royalty'], {
                state: {
                  mode: this.router?.getCurrentNavigation()?.extras?.state
                    ?.mode,
                },
              });
              this.toast.error('Please try again', 'Error');
            }
          },
          (err) => {
            this.router.navigate(['/register/become-royalty'], {
              state: {
                mode: this.type,
              },
            });
            this.toast.error('Please try again', 'Error');
          }
        );
    } else {
      this.router.navigate(['/register/become-royalty'], {
        state: {
          mode: this.type,
        },
      });
    }
    this.loading = false;

    return;
  }

  // register method
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
            localStorage.setItem('stageId', res.data.data.id);
            this.page = 'success';

            // deal with register
            console.log(res);
          } else {
            this.toast.error(res.data.responseMessage, 'Error');
            this.page = 'fail';
          }
        },
        (err) => {
          this.toast.error('Error please try Again', 'Error');
          this.loading = false;
          this.page = 'fail';
        }
      );
  }

  ngOnInit(): void {
    // register form
    this.type = this.router?.getCurrentNavigation()?.extras?.state?.mode;
    console.log('type', this.type);

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
      CreateBankAccount: new FormControl(false),
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
      Gender: new FormControl(''),
    });
    // console.log(this.onboardingForm.value);
  }

  uploadPhoto() {
    this.loading = true;
    const photo = this.croppedImage;
    const first = photo.split(',');
    const mainImage = first[1];
    const extension = first[0].split('image/');
    const mainExtension = extension[1].split(';')[0];

    this.auth
      .fileUpload({
        FileName: `status.${mainExtension}`,
        Base64String: mainImage,
      })
      .subscribe(
        (res: any) => {
          console.log(res);

          if (res.status) {
            console.log(res);
            this.loading = false;
            this.onboardingForm.patchValue({
              PassportUrl: res.result,
            });
            this.register();
            // this.data = res.data;

            // deal with register
          } else {
            this.loading = false;
            this.toast.error('Error try again', 'Error');
            this.page = 'fail';
          }
        },
        (err) => {
          this.toast.error('Error please try Again', 'Error');
          console.log('error');
          this.page = 'fail';
          this.loading = false;
        }
      );
  }

  crop() {
    this.uploadPhoto();

    console.log('selected', this.calculateImageSize(this.photo.selectedImage));
    console.log('main', this.calculateImageSize(this.croppedImage));
  }
  calculateImageSize(base64String) {
    let padding;
    let inBytes;
    let base64StringLength;
    if (base64String.endsWith('==')) {
      padding = 2;
    } else if (base64String.endsWith('=')) {
      padding = 1;
    } else {
      padding = 0;
    }

    base64StringLength = base64String.length;
    inBytes = (base64StringLength / 4) * 3 - padding;
    this.kbytes = inBytes / 1000;
    return this.kbytes;
  }
  async takePhoto() {
    const res = await this.photo.addNewToGallery();
    if (this.photo.selectedImage) {
      console.log(this.photo.selectedImage);
      this.baseImage = this.photo.selectedImage;

      this.page = 'crop';
    } else {
      this.page = 'fail';
    }
  }
  retake() {
    this.page = 'take';
  }
  next() {
    this.router.navigate(['/register/done'], {
      state: {
        mode: this.type,
      },
    });
  }
}
