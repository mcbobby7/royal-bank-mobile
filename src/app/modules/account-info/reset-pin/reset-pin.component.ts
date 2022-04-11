import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reset-pin',
  templateUrl: './reset-pin.component.html',
  styleUrls: ['./reset-pin.component.scss'],
})
export class ResetPinComponent implements OnInit {
  pinResetForm = new FormGroup({
    oldPin: new FormControl(''),
    newPin: new FormControl(''),
    confirmPin: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {}

}
