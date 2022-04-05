import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfund',
  templateUrl: './addfund.page.html',
  styleUrls: ['./addfund.page.scss'],
})
export class AddfundPage implements OnInit {

  show: boolean;
  constructor() { }

  ngOnInit() {}

  viewpassword() {
    this.show = !this.show;
  }


  addFund(){
    console.log('Hello');
  }
}
