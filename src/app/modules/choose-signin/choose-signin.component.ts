import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-signin',
  templateUrl: './choose-signin.component.html',
  styleUrls: ['./choose-signin.component.scss'],
})
export class ChooseSigninComponent implements OnInit {
  source1 = 'assets/icon/royalL.png';
  source = 'assets/icon/royalty.png';
  imageSrc = 'assets/icon/phone.png';

  constructor(public router: Router) {}

  ngOnInit() {}
  sign() {
    this.router.navigate(['/login']);
  }
  create() {
    this.router.navigate(['/register']);
  }
}
