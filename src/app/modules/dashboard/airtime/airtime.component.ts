import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-airtime',
  templateUrl: './airtime.component.html',
  styleUrls: ['./airtime.component.scss'],
})
export class AirtimeComponent implements OnInit {

  selectedBtn = true;
  selectedBtn1 = false;
  newReq = true;
  transType = 0;
  beneficiaryForm = new FormGroup({
    beneficiaryAccount: new FormControl(''),
    amount: new FormControl(''),
    narration: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  transactionType(e){
    this.transType = e;
  }

  create(){
    console.log('Hey');
  }

  toggleRequest(e){
    this.newReq = e;
    this.selectedBtn = !this.selectedBtn;
    this.selectedBtn1 = !this.selectedBtn1;
  }
}
