import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.page.html',
  styleUrls: ['./loan.page.scss'],
})
export class LoanPage implements OnInit {

  transType = 0;

  loanForm = new FormGroup({
    beneficiaryAccount: new FormControl(''),
    bank: new FormControl(''),
    amount: new FormControl(''),
    narration: new FormControl(''),
  });


  constructor() { }

  ngOnInit() {
  }

  transactionType(e){
    this.transType = e;
  }

}
