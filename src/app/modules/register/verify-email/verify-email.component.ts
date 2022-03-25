import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
stage = 0;
verifyForm = new FormGroup({
  code: new FormControl(''),
});
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
