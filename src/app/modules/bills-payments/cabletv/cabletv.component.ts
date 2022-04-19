import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/http/services/auth.service';


@Component({
  selector: 'app-cabletv',
  templateUrl: './cabletv.component.html',
  styleUrls: ['./cabletv.component.scss'],
})
export class CabletvComponent implements OnInit {
  billProducts = [];
  transType = 0;
  categoryId = 0;
  typeCode = '';
  constructor(private auth: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.typeCode = this.route.snapshot.queryParamMap.get('id');
    // this.route.snapshot.queryParams.subscribe(data => {
    //   this.categoryId = data.id;
    //   console.log('See your VAS ID:', this.categoryId);
    // });
    console.log('See your VAS ID:', this.typeCode);
    this.fetchBillsProducts();
  }

   fetchBillsProducts(){
    this.auth.post({vasTypeCode: this.typeCode}, 'Cba.ValueAddedService.FetchProducts').subscribe((data: any) => {
      if(data.status === '00'){
        this.billProducts = data.data;
        console.log(this.billProducts);
      } else {
        console.log('Could not fetch data');
      }
    }, (err) => console.error(err.message));
  }

}
