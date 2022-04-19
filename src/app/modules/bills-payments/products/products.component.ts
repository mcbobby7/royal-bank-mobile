import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/http/services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  selectedBtn = true;
  selectedBtn1 = false;
  newReq = true;
  transType = 0;
  vars: any = [];
  products: any = [];
  add = false;
  name;
  benNum;
  productCode;
  phoneNumber;
  loading = false;
  vasType;
  submitCode;
  typeCode = 0;
  user = JSON.parse(localStorage.getItem('user'));
  benes = localStorage.getItem('benNums')
    ? JSON.parse(localStorage.getItem('benNums'))
    : [];
  beneficiaryForm = new FormGroup({
    beneficiaryAccount: new FormControl(''),
    amount: new FormControl(''),
    narration: new FormControl(''),
  });

  constructor(
    private auth: AuthService,
    public toast: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.typeCode = Number(this.route.snapshot.queryParamMap.get('id'));
    this.fetchData();
  }
  fetchData() {
    console.log();

    this.auth
      .post(
        { VasCategoryId: this.typeCode },
        'Cba.ValueAddedService.FetchTypes'
      )
      .subscribe(
        (res: any) => {
          if (res.status === '00') {
            // deal with register
            this.vars = res.data;
            console.log(this.vars);
          } else {
            console.log(res.data.responseMessage);
          }
        },
        (err) => console.error(err.message)
      );
  }

  fetchProduct(code) {
    console.log();

    this.auth
      .post({ vasTypeCode: code }, 'Cba.ValueAddedService.FetchProducts')
      .subscribe(
        (res: any) => {
          if (res.status === '00') {
            // deal with register
            this.products = res.data;
            console.log(this.vars);
            console.log(res);
          } else {
            console.log(res.data.responseMessage);
          }
        },
        (err) => console.error(err.message)
      );
  }

  transactionType(e, code) {
    this.fetchProduct(code);
    console.log('This is the code:', code);
    this.transType = e;
  }
  adds() {
    if (!this.benNum) {
      this.toast.error('mobile number is required', 'Error');
      return;
    }
    if (!this.name) {
      this.toast.error('name is required', 'Error');
      return;
    }
    for (let i = 0; i < this.benes.length; i++) {
      if (this.benes[i].phoneNumber === this.benNum) {
        this.toast.error('Number already exist', 'Error');
        return;
      }
    }
    this.benes.unshift({
      name: this.name,
      phoneNumber: this.benNum,
    });
    localStorage.setItem('benNums', JSON.stringify(this.benes));
  }
  delete(phone) {
    console.log(this.benes);

    const data = [];
    for (let i = 0; i < this.benes.length; i++) {
      if (this.benes[i].phoneNumber !== phone) {
        data.push(this.benes[i]);
      }
    }
    this.benes = data;
    localStorage.setItem('benNums', JSON.stringify(this.benes));
    console.log(this.benes);
  }

  use(num) {
    this.phoneNumber = num;
    this.newReq = true;
  }

  create() {
    console.log('Hey');
  }
  new() {
    this.add = !this.add;
  }
  submit() {
    this.loading = true;
    let payload;
    for (let i = 0; i < this.products.length; i++) {
      if (this.productCode === this.products[i].productCode) {
        payload = this.products[i];
      }
    }
    console.log(this.user);

    this.auth
      .post(
        {
          VasTypeCode: payload.vasTypeCode,
          ProductCode: payload.productCode,
          RefNo: this.phoneNumber,
          Amount: +payload.productPrice,
          CustomerAccountNo: this.user.accountNos[0].accountNo,
        },
        'Cba.ValueAddedService.PostTransaction'
      )
      .subscribe(
        (res: any) => {
          this.loading = false;
          console.log(res);

          if (res.data.status === '200') {
            this.toast.success('Transaction Successfull', 'Success');
            // deal with register
          } else {
            this.toast.error('Error please try again', 'Error');

            console.log(res.data.responseMessage);
          }
        },
        (err) => {
          console.error(err.message);
          this.toast.error('Error please try again', 'Error');

          this.loading = true;
        }
      );
  }

  toggleRequest(e) {
    this.newReq = e;
    if (e === true) {
      this.selectedBtn = e;
      this.selectedBtn1 = false;
    } else {
      this.selectedBtn = false;
      this.selectedBtn1 = true;
    }
  }
}
