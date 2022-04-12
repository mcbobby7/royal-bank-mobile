import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.page.html',
  styleUrls: ['./loan.page.scss'],
})
export class LoanPage implements OnInit {

  transType = 0;
  newReq = true;
  selectedBtn = true;
  selectedBtn1 = false;
  loanForm = new FormGroup({
    beneficiaryAccount: new FormControl(''),
    bank: new FormControl(''),
    amount: new FormControl(''),
    narration: new FormControl(''),
  });

  othersForm = new FormGroup({
    document: new FormControl(''),
    comment: new FormControl(''),
  });


  constructor() { }

  ngOnInit() {
  }

  transactionType(e){
    this.transType = e;
  }

  toggleRequest(e){
    this.newReq = e;
    if(e === true){
      this.selectedBtn = e;
      this.selectedBtn1 = false;
    } else {
      this.selectedBtn = false;
      this.selectedBtn1 = e;
    }
  }

}
