import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../../core/services/photo.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/http/services/auth.service';
import { NavController } from '@ionic/angular';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
})
export class UploadImageComponent implements OnInit {
  imageSrc = 'assets/icon/hey.png';
  source = 'assets/icon/royalty.png';
  page = 'take';
  id: any = localStorage.getItem('stageId');
  onboardingForm!: FormGroup;
  loading = false;
  user = JSON.parse(localStorage.getItem('user'));
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
    this.takePhoto();
    // register form
    // console.log(this.onboardingForm.value);
  }

  updateURL(url) {
    console.log('user', this.user);

    this.auth
      .post(
        {
          Id: this.user.userId,
          PassportUrl: url,
        },
        'UserManager.UserService.UpdateProfilePicture'
      )
      .subscribe(
        (res: any) => {
          console.log(res);

          if (res.data.responseCode === '00') {
            console.log(res);
            this.loading = false;
            this.user.photo = url;
            localStorage.setItem('user', JSON.stringify(this.user));
            this.toast.success('Profile updated successfully', 'Success');
            this.router.navigate(['/dashboard']);
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

            this.updateURL(res.result);
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
