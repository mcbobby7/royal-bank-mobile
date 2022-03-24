import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../core/http/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() buttonAction;
  show = false;
  signinForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  imageSrc = 'assets/icon/hey.png';
  data: any;
  loginForm!: FormGroup;
  constructor(
    private auth: AuthService,
    public toast: ToastrService,
    public router: Router
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
    const { email, password } = this.loginForm.value;
    const data = {
      AuthMode: 'Bearer',
      Username: this.loginForm.value.email,
      Password: this.loginForm.value.password,
    };
    this.auth.post(data, 'UserManager.UserService.Login').subscribe(
      (res: any) => {
        if (res.data.responseCode === '00') {
          this.toast.success('Login was successfull', 'Success');
          this.data = res.data;
          localStorage.setItem('user', JSON.stringify(res.data.profile));
          localStorage.setItem('token', res.data.token);
          this.router.navigate(['/register']);
        } else {
          this.toast.error(res.data.responseMessage, 'Error');
        }
      },
      (err) => console.error(err.message)
    );
  }

  ngOnInit(): void {
    // login form
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
}
