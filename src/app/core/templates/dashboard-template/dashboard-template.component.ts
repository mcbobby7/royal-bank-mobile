import { Component, OnInit } from '@angular/core';
// import { MenuController } from '@ionic/angular';
// import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-dashboard-template',
  templateUrl: './dashboard-template.component.html',
  styleUrls: ['./dashboard-template.component.scss'],
})
export class DashboardTemplateComponent implements OnInit {
  active = '';
  imageSrc = 'assets/icon/royalL.png';
  user = JSON.parse(localStorage.getItem('user'));
  photo;

  nav = [
    // {
    //   name: 'Overview',
    //   link: '/nav/about',
    //   icon: 'assets/icon/dashboard.png',
    // },
    {
      name: 'Transfer',
      link: '/action/transfer',
      icon: 'assets/icon/cards.png',
    },
    {
      name: 'Bills Payment',
      link: '/action/bills-payment',
      icon: 'assets/icon/airtime.png',
    },
    {
      name: 'Airtime and Data',
      link: '/action/airtime',
      icon: 'assets/icon/payment.png',
    },
    {
      name: 'Loan',
      link: '/action/loan',
      icon: 'assets/icon/qr.png',
    },
    // {
    //   name: 'Cards',
    //   link: '/nav/contact',
    //   icon: 'assets/icon/cards.png',
    // },
    {
      name: 'Transaction History',
      link: '/action/history',
      icon: 'assets/icon/cheques.png',
    },
    // {
    //   name: 'Settings',
    //   link: '/action/profile',
    //   icon: 'assets/icon/setting.png',
    // },
    {
      name: 'Profile',
      link: '/action/profile',
      icon: 'assets/icon/bills.png',
    },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url;
    });

    const setStatusBarStyleDark = async () => {
      await StatusBar.setStyle({ style: Style.Light });
    };
    setStatusBarStyleDark();
    StatusBar.setBackgroundColor({
      color: '#ffffff',
    });
  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.photo = user.photo ? user.photo : 'assets/icon/hey.png';
  }
}
