import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  imageSrc = 'assets/icon/hey.png';
  page = 'finish';
  show = false;
  accountForm = new FormGroup({
    password: new FormControl(''),
    confirmPass: new FormControl(''),
    code: new FormControl(''),
    firstName: new FormControl(''),
    middleName: new FormControl(''),
    lastName: new FormControl(''),
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
