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
  selectedBtn = true;
  selectedBtn1 = false;
  transType = 0;
  newReq = true;
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

  toggleRequest(e){
    this.newReq = e;
    if(e === true){
      this.selectedBtn = e;
      this.selectedBtn1 = false;
    } else {
      this.selectedBtn = false;
      this.selectedBtn1 = true;
    }
  }
}
