import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  caption = 'Do More';
  subtitle =
    'Access world class banking experience and financial services with ease. FOR FREE';
  source = 'assets/icon/welcome.png';
  stage = 1;

  constructor(public router: Router) {}

  ngOnInit() {}
  skip() {
    this.router.navigate(['/choose-signin']);
  }
  next() {
    if (this.stage === 1) {
      this.caption = 'Be More';
      this.subtitle =
        'Bank with ease, say no to hidden charges and enjoy an experience designed to help you grow and be more.';
      this.source = 'assets/icon/welcome.jpg';
      this.stage++;
    } else {
      this.router.navigate(['/choose-signin']);
    }
  }
}
