import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify-bvn',
  templateUrl: './verify-bvn.component.html',
  styleUrls: ['./verify-bvn.component.scss'],
})
export class VerifyBvnComponent implements OnInit {
  mode = 'basic';
  page = 'select';

  verifyForm = new FormGroup({
    code: new FormControl(''),
  });
  stage = 0;
  bvnError = true;
  constructor(
    private navController: NavController,
    private router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.route.snapshot.params.mode !== '1') {
      this.page = 'verify';
    }
  }

  goBack() {
    if (this.page === 'select') {
      this.navController.back();
    } else {
      this.page = 'select';
    }
  }
  setMode(mode) {
    this.mode = mode;
  }

  goNext() {
    if (this.mode === 'basic') {
      this.page = 'verify';
    } else {
      this.router.navigate(['/register/details']);
    }
  }

  next() {
    this.stage++;
  }
  verify() {
    if (this.route.snapshot.params.mode === '4') {
      this.router.navigate(['/register/phone/08161808893/4']);
      return;
    } else if (this.route.snapshot.params.mode === '2') {
      this.router.navigate(['/register/phone/08161808893/4']);
      return;
    }
    this.router.navigate(['/register/phone/08161808893/1']);
  }
}
