import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
})
export class DoneComponent implements OnInit {
  source1 = 'assets/icon/royalL.png';

  source = 'assets/icon/royalty.png';
  imageSrc = 'assets/icon/phoneA.png';

  constructor(public router: Router) {}

  ngOnInit() {}
  sign() {
    this.router.navigate(['/login']);
  }
  create() {
    this.router.navigate(['/dashboard']);
  }
}
