import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/http/services/auth.service';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('500ms ease-in', style({ transform: 'translateY(-0%)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class DashboardPage implements OnInit {
  show = false;
  userId: any = localStorage.getItem('stageId');
  accountId = '';
  accountBalance = '';
  loading = false;
  user: any = JSON.parse(localStorage.getItem('user'));

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    console.log(this.user.hasBVN);
  }

  viewBalance() {
    this.show = !this.show;
  }
  sha() {
    this.show = !this.show;
  }
  load() {
    return;
  }
  finish() {
    return;
  }
  close() {
    this.show = !this.show;
  }
}
