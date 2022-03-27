import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify-phone',
  templateUrl: './verify-phone.component.html',
  styleUrls: ['./verify-phone.component.scss'],
})
export class VerifyPhoneComponent implements OnInit {
  bvnError = true;
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
    if (this.route.snapshot.params.mode === '1') {
      this.router.navigate(['/register/bvn-success/1']);
    } else if (this.route.snapshot.params.mode === '2') {
      this.router.navigate(['/register/image']);
    } else if (this.route.snapshot.params.mode === '3') {
      this.router.navigate(['/register/image-done']);
    } else if (this.route.snapshot.params.mode === '4') {
      this.router.navigate(['/register/bvn-success/2']);
    }
  }
}
