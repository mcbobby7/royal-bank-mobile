import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user'));

  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    middleName: new FormControl(''),
    userName: new FormControl('a'),
    phone: new FormControl('875'),
    email: new FormControl(''),
    password: new FormControl(''),
    createBankAccount: new FormControl(true),
    dob: new FormControl(''),
    refCode: new FormControl(''),
    verified: new FormControl(false),
    accountType: new FormControl(''),
    companyType: new FormControl(''),
    passportUrl: new FormControl(''),
    hasBVN: new FormControl(false),
    stage: new FormControl(1),
    isFinal: new FormControl(false),
    bvn: new FormControl(''),
  });
  show: boolean;
  page = 'select';
  age = 'select';
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
  next() {}
}
