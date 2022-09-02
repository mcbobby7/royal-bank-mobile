import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../core/http/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {
  AvailableResult,
  BiometryType,
  NativeBiometric,
} from 'capacitor-native-biometric';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loading = false;
  show = false;
  // signinForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });
  imageSrc = 'assets/icon/hey.png';
  data: any;
  loginForm!: FormGroup;
  constructor(
    private auth: AuthService,
    public toast: ToastrService,
    private router: Router,
    public alertController: AlertController
  ) {}
  viewpassword() {
    this.show = !this.show;
  }
  // getUsers() {
  //   this.auth.getUsers().subscribe(
  //     (x) => console.log('Observer got a next value: ' + x),
  //     (err) => console.error(err.message),
  //     () => console.log('Observer got a complete notification')
  //   );
  // }

  // login method
  login() {
    this.loading = true;
    // setTimeout(() => {
    //   this.router.navigate(['/dashboard']);
    //   this.loading = false;
    // }, 3000);
    const data = {
      AuthMode: 'Bearer',
      Username: this.loginForm.value.email,
      Password: this.loginForm.value.password,
    };
    this.auth.post(data, 'UserManager.UserService.Login').subscribe(
      (res: any) => {
        this.loading = false;
        console.log(res);

        if (res.data.responseCode === '00') {
          this.toast.success('Login was successfull', 'Success');
          this.data = res.data;
          localStorage.setItem('user', JSON.stringify(res.data.profile));
          console.log(res.data.profile);
          this.deleteCredential();
          this.setCredential(
            this.loginForm.value.email,
            this.loginForm.value.password
          );

          localStorage.setItem('token', res.data.token);
          this.loginForm.reset();
          this.router.navigate(['/dashboard']);
        } else {
          this.toast.error(res.data.responseMessage, 'Error');
        }
      },
      (err) => {
        this.toast.error('Check your internet connection', 'Error');
        this.loading = false;
      }
    );
  }
  forgot() {
    this.router.navigate(['/forgot-passowrd']);
  }

  ngOnInit(): void {
    // login form
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
    this.checkCredential();
  }
  register() {
    this.router.navigate(['/register']);
  }

  setCredential(username: string, password: string) {
    NativeBiometric.setCredentials({
      username,
      password,
      server: 'www.royalbankng.com',
    }).then();
  }

  deleteCredential() {
    NativeBiometric.deleteCredentials({
      server: 'www.royalbankng.com',
    });
  }

  checkCredential() {
    NativeBiometric.isAvailable().then((result: AvailableResult) => {
      const isAvailable = result.isAvailable;
      // alert('RESULT ' + JSON.stringify(result));
      console.log('resuklt', result);

      if (isAvailable) {
        NativeBiometric.getCredentials({
          server: 'www.royalbankng.com',
        })
          .then((credentials) => {
            console.log('creden', credentials);

            if (!credentials.password || !credentials.username) {
              this.presentAlertPromptFirst();
              return false;
            }

            NativeBiometric.verifyIdentity({
              reason: 'Verify your identity',
              title: 'Verify your identity',
              subtitle: '',
              description: '',
            })
              .then(() => {
                this.loginForm.patchValue({
                  email: credentials.username,
                  password: credentials.password,
                });
                this.login();
              })
              .catch((err) => {
                this.presentAlertPrompt();
              });
          })
          .catch((err) => {
            this.presentAlertPromptFirst();
          });
      } else {
        this.presentAlertPromptFirst();
        return false;
      }
    });
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      // subHeader: 'Subtitle',
      message:
        'Unable to use biometric at the moment, you can still login using email and password',
      buttons: [
        {
          text: 'Close',
          handler: () => {},
        },
      ],
    });

    await alert.present();
  }

  async presentAlertPromptFirst() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Note',
      // subHeader: 'Subtitle',
      message:
        'Unable to use biometric at the moment, you have to manually login for the first time, before you can use Biometrics',
      buttons: [
        {
          text: 'Close',
          handler: () => {},
        },
        {
          text: 'Ok',
          handler: () => {},
        },
      ],
    });

    await alert.present();
  }
}
