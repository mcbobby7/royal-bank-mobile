import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/http/services/auth.service';
@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.page.html',
  styleUrls: ['./account-info.page.scss'],
})
export class AccountInfoPage implements OnInit {
  option = 0;
  imageSrc = 'assets/icon/royalL.png';
  user = JSON.parse(localStorage.getItem('user'));
  photo;
  show = false;
  documentName = localStorage.getItem('uploadID');
  view = false;
  upload = localStorage.getItem('upload');
  documents;
  loading = false;
  uploaded;
  useBio = false;

  constructor(public toast: ToastrService, private auth: AuthService) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.photo = user.photo ? user.photo : 'assets/icon/hey.png';
    setInterval(() => {
      this.uploaded = localStorage.getItem('upload');
    }, 500);
    this.useBio = localStorage.getItem('useBio')
      ? JSON.parse(localStorage.getItem('useBio'))
      : false;
  }
  update(value: any) {
    localStorage.setItem('useBio', this.useBio.toString());
  }

  selectedOption(e) {
    this.option = e;
  }

  enableBiomterics() {
    console.log('Biometric login enabled');
  }
  close() {
    this.show = !this.show;
  }
  viewDoc() {
    this.view = !this.view;
  }
  checkDoc() {
    this.loading = true;
    this.auth
      .post(
        {
          clientId: +this.user.clientId,
        },
        'Cba.BankingService.UploadedDocumentList'
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          this.loading = false;
          if (res.data.responseCode === '00') {
            this.documents = res.data.data;
            this.view = !this.view;
          } else {
          }
        },
        (err) => {
          this.loading = false;
        }
      );
  }
}
