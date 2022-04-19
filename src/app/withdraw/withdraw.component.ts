import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss'],
})
export class WithdrawComponent implements OnInit {
  source = 'assets/icon/royalty.png';
  imageSrc = 'assets/icon/success.png';
  selectedBtn = true;
  selectedBtn1 = false;
  transType = 0;
  newReq = true;

  form = new FormGroup({
    beneficiaryAccount: new FormControl(''),
    accountId: new FormControl(''),
    txnType: new FormControl(''),
    locale: new FormControl(''),
    dateFormat: new FormControl('dd MMMM yyyy'),
    transactionDate: new FormControl(''),
    transactionAmount: new FormControl(''),
    paymentTypeId: new FormControl(''),
    accountNumber: new FormControl(''),
    checkNumber: new FormControl(''),
    routingCode: new FormControl(''),
    receiptNumber: new FormControl(''),
    bankNumber: new FormControl(''),
  });

  constructor() {}

  ngOnInit() {
    console.log('working');
  }

  transactionType(e) {
    this.transType = e;
  }

  create() {
    console.log('Hey');
  }
  next() {
    console.log('Hey');
  }
  chooseBeneficiary(e) {
    console.log('chosen');
  }

  toggleRequest(e) {
    this.newReq = e;
    if (e === true) {
      this.selectedBtn = e;
      this.selectedBtn1 = false;
    } else {
      this.selectedBtn = false;
      this.selectedBtn1 = true;
    }
  }
}
