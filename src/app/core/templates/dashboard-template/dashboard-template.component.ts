import { Component, OnInit } from '@angular/core';
// import { MenuController } from '@ionic/angular';
// import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-dashboard-template',
  templateUrl: './dashboard-template.component.html',
  styleUrls: ['./dashboard-template.component.scss'],
})
export class DashboardTemplateComponent implements OnInit {
  active = '';
  imageSrc = 'assets/icon/royalL.png';

  nav = [
    {
      name: 'Overview',
      link: '/nav/about',
      icon: 'assets/icon/dashboard.png',
    },
    {
      name: 'Bills Payment',
      link: '/nav/blog',
      icon: 'assets/icon/airtime.png',
    },
    {
      name: 'Scheduled Payments',
      link: '/nav/contact',
      icon: 'assets/icon/payment.png',
    },
    {
      name: 'QR Payment',
      link: '/nav/contact',
      icon: 'assets/icon/qr.png',
    },
    {
      name: 'Cards',
      link: '/nav/contact',
      icon: 'assets/icon/cards.png',
    },
    {
      name: 'Cheques',
      link: '/nav/contact',
      icon: 'assets/icon/cheques.png',
    },
    {
      name: 'Settings',
      link: '/nav/contact',
      icon: 'assets/icon/setting.png',
    },
    {
      name: 'Airtime Recharge',
      link: '/nav/contact',
      icon: 'assets/icon/bills.png',
    },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url;
    });
  }

  ngOnInit() {}
}
