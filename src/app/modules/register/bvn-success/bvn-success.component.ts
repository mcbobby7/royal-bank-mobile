import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bvn-success',
  templateUrl: './bvn-success.component.html',
  styleUrls: ['./bvn-success.component.scss'],
})
export class BvnSuccessComponent implements OnInit {
  imageSrc = 'assets/icon/hey.png';
  source = 'assets/icon/royalty.png';
  type;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.type = this.router?.getCurrentNavigation()?.extras?.state?.mode;
    console.log('type', this.type);
  }

  next() {
    if (this.route.snapshot.params.mode === '1') {
      this.router.navigate(['/register/account'], {
        state: {
          mode: this.type,
        },
      });
    } else {
      this.router.navigate(['/register/done'], {
        state: {
          mode: this.type,
        },
      });
    }
  }
}
