import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/http/services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
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
export class PinComponent implements OnInit {
  @Output()
  done: EventEmitter<any> = new EventEmitter();
  @Output()
  loading: EventEmitter<any> = new EventEmitter();
  @Output()
  close: EventEmitter<any> = new EventEmitter();
  user = JSON.parse(localStorage.getItem('user'));
  pin;
  transactionPin = [];
  err = '';
  constructor(
    public toast: ToastrService,
    private auth: AuthService,
    public alertController: AlertController
  ) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Create Pin',
      message:
        'Your must create a pin to make transactions, go to Dashbaord/Account and create pin to.',
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertNertwor() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: this.err,
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ngOnInit() {
    this.auth
      .post(
        { UserId: +this.user.userId, Pin: '0000' },
        'UserManager.UserService.FetchUserPin'
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res.data.data.status === true) {
            this.presentAlert();
            this.close.emit();
            this.loading.emit();

            return;
          }
        },
        (err) => {
          this.err = 'Please check your network and try again';
          this.presentAlertNertwor();
          // this.close.emit();

          console.log('res');

          return;
        }
      );
  }

  getPinValue(e) {
    if (e === 11) {
      this.transactionPin.pop();
      console.log(this.transactionPin);
    } else {
      this.transactionPin.push(e);
    }
    if (this.transactionPin.length === 4) {
      this.loading.emit();
      this.auth
        .post(
          { UserId: +this.user.userId, Pin: this.transactionPin.join('') },
          'UserManager.UserService.FetchUserPin'
        )
        .subscribe(
          (res: any) => {
            console.log(res);

            if (res.status === '00') {
              // deal with register
              console.log(res.data.data.status);

              if (res.data.data.status === true) {
                this.done.emit();
              } else {
                this.toast.error('Invalid Pin', 'Error');
                this.loading.emit();
              }
              this.transactionPin = [];
            } else {
              this.toast.error(res.data.responseMessage, 'Error');
              this.loading.emit();
              console.log(res.data.responseMessage);
              this.transactionPin = [];
            }
          },
          (err) => {
            this.toast.error('Error try again', 'Error');
            this.loading.emit();
            this.transactionPin = [];
          }
        );
    }
  }
  closeDraw() {
    this.close.emit();
  }
}
