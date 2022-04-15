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

//   You can use FetchVasType to get the Vas type code
// FetchProduct to get the product code
// FetchVasCategory for the payment type

  fetchBillsCategory(){
    this.auth.post(null, 'Cba.ValueAddedService.FetchCategories').subscribe((data: any) => {
      if(data.status === '00'){
        this.billCategories = data.data;
        console.log(this.billCategories);
      } else {
        console.log('Could not fetch data');
      }
    },(err) => console.error(err.message));
  }

}
