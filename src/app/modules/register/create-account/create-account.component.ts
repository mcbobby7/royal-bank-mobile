import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  page = 'select';
  show = false;
  accountForm = new FormGroup({
    password: new FormControl(''),
    confirmPass: new FormControl(''),
    code: new FormControl(''),
  });
  constructor(private router: Router) {}

  ngOnInit() {}

  viewpassword() {
    this.show = !this.show;
  }
  change(mode) {
    this.page = mode;
  }
  next() {
    this.router.navigate(['/register/email/2']);
  }
}
