import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-account-type',
  templateUrl: './select-account-type.component.html',
  styleUrls: ['./select-account-type.component.scss'],
})
export class SelectAccountTypeComponent implements OnInit {
  stage = 0;
  mode = 'basic';
  constructor(private navController: NavController, private router: Router) {}

  ngOnInit() {}

  goBack() {
    if (this.stage === 0) {
      this.navController.back();
    } else {
      this.stage -= 1;
    }
  }
  setMode(mode) {
    this.mode = mode;
  }
  next() {
    if (this.mode === 'basic') {
      this.router.navigate(['/register/bvn/1']);
    } else {
      this.router.navigate(['/register/cop-details']);
    }
  }
}
