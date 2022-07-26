import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/http/services/auth.service';
import { trigger, transition, animate, style } from '@angular/animations';
import { AlertController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('500ms ease-in', style({ transform: 'translateY(-0%)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class DashboardPage implements OnInit {
  show = false;
  userId: any = localStorage.getItem('stageId');
  isCard: any = localStorage.getItem('card');
  limit: any = localStorage.getItem('limit');
  upload: any = localStorage.getItem('upload');
  accountId = '';
  accountBalance = '';
  loading = false;
  user: any = JSON.parse(localStorage.getItem('user'));

  constructor(
    private auth: AuthService,
    private router: Router,
    public alertController: AlertController,
    public toast: ToastrService
  ) {}

  ngOnInit() {
    console.log(this.user.hasBVN);
    const user = localStorage.getItem('user');
    const users = user ? JSON.parse(user) : null;
    setInterval(() => {
      this.isCard = localStorage.getItem('card');
      this.limit = localStorage.getItem('limit');
      this.upload = localStorage.getItem('upload');
      this.user = users;
    }, 500);
    if (this.user?.accountNos?.length < 1) {
      this.presentAlertPrompt();
    }
    if (!this.user) {
      this.router.navigate(['/login']);
    }
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Account Number',
      // subHeader: 'Subtitle',
      message:
        'Your account was opened wihtout an account number, please click on the button below to generate new account number',
      buttons: [
        {
          text: 'Generate',
          handler: () => {
            console.log('Confirm Ok');
            this.loading = true;
            this.auth
              .post(
                {
                  UserId: this.user.userId,
                },
                'Cba.BankingService.GenerateAccountNo'
              )
              .subscribe(
                (res: any) => {
                  console.log(res);
                  this.loading = false;
                  if (res.data.responseCode === '00') {
                    // deal with register
                    this.user.accountNos.push(res.data.data);
                    localStorage.setItem('user', this.user);
                    this.toast.success('Account number generated', 'Success');
                  } else {
                    this.toast.error(res.data.responseMessage, 'Error');
                    this.presentAlertPrompt();
                  }
                },
                (err) => {
                  this.loading = false;
                  this.toast.error(
                    'Please check you internet connection',
                    'Error'
                  );
                  this.presentAlertPrompt();
                }
              );
          },
        },
      ],
    });

    await alert.present();
  }

  viewBalance() {
    this.show = !this.show;
  }
  sha() {
    this.show = !this.show;
  }
  load() {
    return;
  }
  finish() {
    return;
  }
  close() {
    this.show = !this.show;
  }
}
