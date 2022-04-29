import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/http/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bills-payments',
  templateUrl: './bills-payments.page.html',
  styleUrls: ['./bills-payments.page.scss'],
})
export class BillsPaymentsPage implements OnInit {
  user = JSON.parse(localStorage.getItem('user'));
  billCategories = [];
  loading = true;
  constructor(
    private auth: AuthService,
    private router: Router,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    this.fetchBillsCategory();
  }

  //   You can use FetchVasType to get the Vas type code
  // FetchProduct to get the product code
  // FetchVasCategory for the payment type

  fetchBillsCategory() {
    this.auth.post(null, 'Cba.ValueAddedService.FetchCategories').subscribe(
      (data: any) => {
        this.loading = false;
        if (data.status === '00') {
          this.billCategories = data.data;
          console.log(this.billCategories);
        } else {
          this.loading = false;
          this.toast.error(data.data.responseMessage, 'Error');
          this.router.navigate(['/dashboard']);
        }
      },
      (err) => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
        this.toast.error('Check your internet connection', 'Error');
      }
    );
  }
}
