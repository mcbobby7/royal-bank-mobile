import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
})
export class PinComponent implements OnInit {

  keyPadValue = [
    {label: 1, value: 1},
    {label: 2, value: 2},
    {label: 3, value: 3},
    {label: 4, value: 4},
    {label: 5, value: 5},
    {label: 6, value: 6},
    {label: 7, value: 7},
    {label: 8, value: 8},
    {label: 9, value: 9},
    {label: 0, value: 0},
    {label: 'X', value: 11}
  ];
  transactionPin = [];
  constructor() { }

  ngOnInit() {}

  getPinValue(e){
    if(e === 11){
      this.transactionPin.pop();
      console.log(this.transactionPin);
    } else {
      this.transactionPin.push(e);
    }
  }

}
