import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {

  source = 'assets/icon/royalty.png';
  imageSrc = 'assets/icon/success.png';
  transType = 0;
  royalAccount = new FormGroup({
    beneficiaryAccount: new FormControl(''),
    amount: new FormControl(''),
    narration: new FormControl(''),
  });

  othersAccount = new FormGroup({
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

  create(){
    console.log('Hey');
  }

  chooseBeneficiary(e){
    console.log('chosen');
  }

}
