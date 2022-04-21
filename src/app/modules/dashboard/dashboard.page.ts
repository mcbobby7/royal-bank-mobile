import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/http/services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  show = true;
  userId: any = localStorage.getItem('stageId');
  accountId = '';
  accountBalance = '';
  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

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
}
