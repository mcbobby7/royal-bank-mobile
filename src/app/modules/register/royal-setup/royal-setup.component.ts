import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-royal-setup',
  templateUrl: './royal-setup.component.html',
  styleUrls: ['./royal-setup.component.scss'],
})
export class RoyalSetupComponent implements OnInit {
  imageSrc = 'assets/icon/hey.png';
  show = false;
  accountForm = new FormGroup({
    password: new FormControl(''),
    confirmPass: new FormControl(''),
    code: new FormControl(''),
    firstName: new FormControl(''),
    middleName: new FormControl(''),
    lastName: new FormControl(''),
  });
  constructor(private router: Router, private navController: NavController) {}
  goBack() {
    this.navController.back();
  }
  ngOnInit() {}

  viewpassword() {
    this.show = !this.show;
  }
  next() {
    this.router.navigate(['/register/bvn/2']);
  }
}
