import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/http/services/auth.service';


@Component({
  selector: 'app-cabletv',
  templateUrl: './cabletv.component.html',
  styleUrls: ['./cabletv.component.scss'],
})
export class CabletvComponent implements OnInit {
  billProducts = [];
  transType = 0;
  constructor(private auth: AuthService,) { }

  ngOnInit() {
    this.fetchBillsProducts();
  }

   fetchBillsProducts(){
    this.auth.post({ VasCategoryId: 1 }, 'Cba.ValueAddedService.FetchTypes').subscribe((data: any) => {
      if(data.status === '00'){
        this.billProducts = data.data;
        console.log(this.billProducts);
      } else {
        console.log('Could not fetch data');
      }
    }, (err) => console.error(err.message));
  }

}
