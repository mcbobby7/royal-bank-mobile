import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.page.html',
  styleUrls: ['./account-info.page.scss'],
})
export class AccountInfoPage implements OnInit {

  option = 0;

  constructor() { }

  ngOnInit() {
  }

  selectedOption(e){
    this.option = e;
  }

  enableBiomterics(){
    console.log('Biometric login enabled');
  }

}
