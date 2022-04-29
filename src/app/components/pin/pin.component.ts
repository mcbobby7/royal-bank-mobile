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

  keyPadValue = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
    { label: 6, value: 6 },
    { label: 7, value: 7 },
    { label: 8, value: 8 },
    { label: 9, value: 9 },
    { label: 0, value: 0 },
    { label: 'X', value: 11 },
  ];
  transactionPin = [];
  constructor(
    public toast: ToastrService,
    private auth: AuthService,
    public alertController: AlertController
  ) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Change Pin',
      message:
        'Your default pin is 0000 you have to change your pin to conduct transactions',
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ngOnInit() {
    this.auth
      .post(
        { UserId: +this.user.userId },
        'UserManager.UserService.FetchUserPin'
      )
      .subscribe(
        (res: any) => {
          console.log(res.data.data.pin);
          console.log(res.data.data.pin);
          if (res.data.data.pin === '0000') {
            this.presentAlert();
            return;
          }
        },
        (err) => {}
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
          { UserId: +this.user.userId },
          'UserManager.UserService.FetchUserPin'
        )
        .subscribe(
          (res: any) => {
            console.log(res.data.data.pin);
            console.log(res.data.data.pin);
            if (res.data.data.pin === '0000') {
              this.presentAlert();
              this.loading.emit();
              return;
            }

            if (res.status === '00') {
              // deal with register
              this.pin = res.data.data.pin;
              if (res.data.data.pin === this.transactionPin.join('')) {
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
