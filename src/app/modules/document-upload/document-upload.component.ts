import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/http/services/auth.service';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss'],
})
export class DocumentUploadComponent implements OnInit {
  show = false;
  loading = false;
  source = 'assets/icon/royalty.png';
  imageSrc = 'assets/icon/done.png';
  user = JSON.parse(localStorage.getItem('user'));
  type = '';
  types = ['National ID', 'International Passport'];
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  fileName: string;

  imageError1: string;
  isImageSaved1: boolean;
  cardImageBase641: string;
  fileName1: string;

  constructor(
    private auth: AuthService,
    public toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.type = 'National ID';
    console.log(this.user);
  }

  fileChangeEvent(fileInput: any, type: any) {
    console.log(fileInput);
    if (type === 'CAC') {
      this.imageError = null;
      this.fileName = null;
    } else {
      this.imageError1 = null;
      this.fileName1 = null;
    }
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['application/pdf'];
      const max_height = 15200;
      const max_width = 25600;

      if (fileInput.target.files[0].size > max_size) {
        if (type === 'CAC') {
          this.imageError = 'Maximum size allowed is ' + max_size / 1000 + 'Mb';
        } else {
          this.imageError1 =
            'Maximum size allowed is ' + max_size / 1000 + 'Mb';
        }

        return false;
      }

      if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
        if (type === 'CAC') {
          this.imageError = 'Only PDF documents are allowed';
        } else {
          this.imageError1 = 'Only PDF documents are allowed';
        }
        return false;
      }
      console.log(fileInput.target.files[0]);
      if (type === 'CAC') {
        this.fileName = fileInput.target.files[0].name.replace(/\s/g, '');
      } else {
        this.fileName1 = fileInput.target.files[0].name.replace(/\s/g, '');
      }
      const readData = () => {
        const reader = new FileReader();
        const future = new Promise((resolve, reject) => {
          reader.addEventListener(
            'load',
            function () {
              resolve(reader.result);
            },
            false
          );
          reader.addEventListener(
            'error',
            function (event) {
              reject(event);
            },
            false
          );

          reader.readAsDataURL(fileInput.target.files[0]);
        });
        return future;
      };

      readData().then((data: any) => {
        console.log(data);
        if (type === 'CAC') {
          this.cardImageBase64 = data;
          this.isImageSaved = true;
        } else {
          this.cardImageBase641 = data;
          this.isImageSaved1 = true;
        }
      });

      // const reader = new FileReader();
      // reader.onload = (e: any) => {
      //   const image = new Image();
      //   image.src = e.target.result;
      //   image.onload = (rs: any) => {
      //     const img_height = rs.currentTarget.height;
      //     const img_width = rs.currentTarget.width;

      //     console.log(img_height, img_width);

      //     if (img_height > max_height && img_width > max_width) {
      //       if (type === 'CAC') {
      //         this.imageError =
      //           'Maximum dimentions allowed ' +
      //           max_height +
      //           '*' +
      //           max_width +
      //           'px';
      //       } else {
      //         this.imageError1 =
      //           'Maximum dimentions allowed ' +
      //           max_height +
      //           '*' +
      //           max_width +
      //           'px';
      //       }

      //       return false;
      //     } else {
      //     const imgBase64Path = e.target.result;
      //     console.log(imgBase64Path);

      //     if (type === 'CAC') {
      //       this.cardImageBase64 = imgBase64Path;
      //       this.isImageSaved = true;
      //     } else {
      //       this.cardImageBase641 = imgBase64Path;
      //       this.isImageSaved1 = true;
      //     }

      //     // this.previewImagePath = imgBase64Path;
      //     // }
      //   };
      // };

      // reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  removeImage() {
    this.cardImageBase64 = null;
    this.isImageSaved = false;
    this.fileName = null;
  }

  removeImage1() {
    this.cardImageBase641 = null;
    this.isImageSaved1 = false;
    this.fileName1 = null;
  }

  upload() {
    if (!this.cardImageBase64) {
      this.toast.error(`Select a valid CAC pdf document`, 'Error');
      return false;
    }
    if (!this.cardImageBase641) {
      this.toast.error(`Select a valid  ID pdf document`, 'Error');
      return false;
    }
    if (!this.type) {
      this.toast.error(`Type of ID is required`, 'Error');
      return false;
    }
    this.loading = true;
    const first = this.cardImageBase64.split(',');
    const mainImage = first[1];

    const data = {
      ClientId: this.user.clientId,
      Name: 'CAC Document',
      FileName: this.fileName,
      Base64String: mainImage,
      Description: 'CAC Document Upload',
    };
    this.auth.post(data, 'Cba.BankingService.DocumentUpload').subscribe(
      (res: any) => {
        console.log(res);
        this.loading = false;
        if (res.data.responseCode === '00') {
          this.upload1();
        } else {
          this.toast.error(res.data.responseMessage, 'Error');
        }
      },
      (err) => {
        this.toast.error('Error please try again', 'Error');
        this.loading = false;
      }
    );
  }

  upload1() {
    if (!this.cardImageBase64) {
      this.toast.error(`CAC document cannot be empty`, 'Error');
      return false;
    }
    if (!this.cardImageBase641) {
      this.toast.error(`Valid ID cannot be empty`, 'Error');
      return false;
    }
    if (!this.type) {
      this.toast.error(`Type of ID is required`, 'Error');
      return false;
    }
    this.loading = true;
    const first = this.cardImageBase641.split(',');
    const mainImage = first[1];
    const data = {
      ClientId: this.user.clientId,
      Name: this.type,
      FileName: this.fileName1,
      Base64String: mainImage,
      Description: this.type + ' ' + 'Upload',
    };
    this.auth.post(data, 'Cba.BankingService.DocumentUpload').subscribe(
      (res: any) => {
        console.log(res);
        this.loading = false;
        if (res.data.responseCode === '00') {
          this.toast.success(
            'Files uploaded successfully, contact bank support for verification status',
            'Success'
          );
          localStorage.setItem('upload', 'true');
          localStorage.setItem('uploadID', this.type);
          this.router.navigate(['/dashboard']);
        } else {
          this.toast.error(res.data.responseMessage, 'Error');
        }
      },
      (err) => {
        this.toast.error('Error please try again', 'Error');
        this.loading = false;
      }
    );
  }
}
