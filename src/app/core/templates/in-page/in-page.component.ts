import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Router, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-in-page',
  templateUrl: './in-page.component.html',
  styleUrls: ['./in-page.component.scss'],
})
export class InPageComponent implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}
  goBack() {
    this.navController.back();
  }
}
