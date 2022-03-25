import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  show = false;
  accountForm = new FormGroup({
    password: new FormControl(''),
    confirmPass: new FormControl(''),
    code: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {}

  viewpassword() {
    this.show = !this.show;
  }

}
