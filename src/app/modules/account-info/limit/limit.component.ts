import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-limit',
  templateUrl: './limit.component.html',
  styleUrls: ['./limit.component.scss'],
})
export class LimitComponent implements OnInit {
  btnClicked = true;
  updateBtn = false;
  updatedForm = 0;
  limitForm = new FormGroup({
    dailyLimit: new FormControl(''),
    singleLimit: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {}

  update(e: number) {
    this.btnClicked = false;
    this.updateBtn = true;
    this.updatedForm = e;
  }

}
