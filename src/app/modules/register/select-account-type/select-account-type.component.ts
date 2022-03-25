import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-select-account-type',
  templateUrl: './select-account-type.component.html',
  styleUrls: ['./select-account-type.component.scss'],
})
export class SelectAccountTypeComponent implements OnInit {

  stage = 0;
  constructor(private navController: NavController) { }

  ngOnInit() {}

  goBack(){
    if(this.stage === 0){
      this.navController.back();
    } else {
      this.stage -= 1;
    }
  }

  next(){
    this.stage++;
  }

}
