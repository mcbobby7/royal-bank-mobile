import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-airtime',
  templateUrl: './airtime.component.html',
  styleUrls: ['./airtime.component.scss'],
})
export class AirtimeComponent implements OnInit {

  transType = 0;
  royalAccount = new FormGroup({
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
}
