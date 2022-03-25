import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-verify-bvn',
  templateUrl: './verify-bvn.component.html',
  styleUrls: ['./verify-bvn.component.scss'],
})
export class VerifyBvnComponent implements OnInit {

  verifyForm = new FormGroup({
    code: new FormControl(''),
  });
  stage = 0;
  bvnError = false;
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
