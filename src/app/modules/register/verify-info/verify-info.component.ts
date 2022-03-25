import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-verify-info',
  templateUrl: './verify-info.component.html',
  styleUrls: ['./verify-info.component.scss'],
})
export class VerifyInfoComponent implements OnInit {

  imageSrc = 'assets/icon/hey.png';
  verifyForm = new FormGroup({
    code: new FormControl(''),
  });
  completed = 3;
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

}
