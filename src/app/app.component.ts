import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { ToastrService } from 'ngx-toastr';
import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Location } from '@angular/common';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  user;
  constructor(
    private idle: Idle,
    private keepalive: Keepalive,
    private router: Router,
    private toast: ToastrService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private location: Location,
    public alertController: AlertController
  ) {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      document.body.setAttribute('dark-theme', 'light');
      document.body.classList.toggle('dark', false);
    });
    StatusBar.setOverlaysWebView({ overlay: false });
    const setStatusBarStyleDark = async () => {
      await StatusBar.setStyle({ style: Style.Light });
    };
    setStatusBarStyleDark();
    StatusBar.setBackgroundColor({
      color: '#ffffff',
    });

    idle.setIdle(50);
    idle.setTimeout(50);
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => (this.idleState = 'No longer idle.'));

    idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      console.log('timed out');
      this.reset();
      if (this.user) {
        this.logout();
        console.log('logout');
      }
    });
    idle.onIdleStart.subscribe(() => (this.idleState = 'idle state'));

    idle.onTimeoutWarning.subscribe(
      (countdown) =>
        (this.idleState = 'You will time out in ' + countdown + ' seconds!')
    ); // sets the ping interval to 15 seconds

    keepalive.interval(15);

    this.reset();
  }

  async showExitConfirm() {
    const alert = await this.alertController.create({
      header: 'Close Royal Bank App',
      message: 'Do you want to close the app?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Application exit prevented!');
          },
        },
        {
          text: 'Exit',
          handler: () => {
            App.exitApp();
            this.clearData();
          },
        },
      ],
    });

    await alert.present();
  }

  async showExitAndLogoutConfirm() {
    const alert = await this.alertController.create({
      header: 'Close Royal Bank App',
      message: 'Do you want to close the app and logout?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Application exit prevented!');
          },
        },
        {
          text: 'Exit',
          handler: () => {
            App.exitApp();
            this.clearData();
          },
        },
      ],
    });

    await alert.present();
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }
  ngOnInit() {
    const session = localStorage.getItem('sessionMin')
      ? new Date(localStorage.getItem('sessionMin'))
      : new Date();
    if (new Date().getTime() - session.getTime() > 120000) {
      this.logout();
    }
    const neDate = new Date();
    localStorage.setItem('sessionMin', neDate.toString());

    this.reset();
    setInterval(() => {
      const date = new Date();
      localStorage.setItem('sessionMin', date.toString());
      this.user = localStorage.getItem('token');
    }, 500);
  }
  logout() {
    localStorage.setItem('user', '');
    localStorage.setItem('token', '');
    this.router.navigate(['/login']);
    this.toast.error('Invalid session timed-out', 'Error');
  }
  clearData() {
    localStorage.setItem('user', '');
    localStorage.setItem('token', '');
  }
}
