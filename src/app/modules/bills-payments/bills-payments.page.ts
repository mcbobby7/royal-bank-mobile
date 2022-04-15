import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/http/services/auth.service';


@Component({
  selector: 'app-bills-payments',
  templateUrl: './bills-payments.page.html',
  styleUrls: ['./bills-payments.page.scss'],
})
export class BillsPaymentsPage implements OnInit {
  billCategories = [];
  constructor(private auth: AuthService,) { }

  ngOnInit() {
    this.fetchBillsCategory();
  }

  fetchBillsCategory(){
    this.auth.post(null, 'Cba.ValueAddedService.FetchCategories').subscribe((data: any) => {
      if(data.status === '00'){
        this.billCategories = data.data;
        console.log(this.billCategories);
      } else {
        console.log('Could not fetch data');
      }
    });
  }

}
