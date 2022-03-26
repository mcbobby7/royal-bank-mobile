import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
  stage = 0;
  verifyForm = new FormGroup({
    code: new FormControl(''),
  });
  constructor(
    private navController: NavController,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  goBack() {
    if (this.stage === 0) {
      this.navController.back();
    } else {
      this.stage -= 1;
    }
  }
  next() {
    if (this.route.snapshot.params.mode === '3') {
      this.router.navigate(['/register/phone/098897776667/3']);
    } else {
      this.router.navigate(['/register/phone/098897776667/2']);
    }
  }
}
