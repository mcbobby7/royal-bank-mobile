import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';

import { Router, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-in-page',
  templateUrl: './in-page.component.html',
  styleUrls: ['./in-page.component.scss'],
})
export class InPageComponent implements OnInit {
  constructor(private navController: NavController) {
    const setStatusBarStyleDark = async () => {
      await StatusBar.setStyle({ style: Style.Dark });
    };
    setStatusBarStyleDark();
    StatusBar.setBackgroundColor({
      color: '#25214f',
    });
  }

  ngOnInit() {}
  goBack() {
    this.navController.back();
  }
}
