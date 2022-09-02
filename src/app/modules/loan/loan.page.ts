import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/http/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.page.html',
  styleUrls: ['./loan.page.scss'],
})
export class LoanPage implements OnInit {
  user = JSON.parse(localStorage.getItem('user'));
  loading = true;
  data = [];
  loadTypes = [];
  schedules = [];
  history = [];
  repaySchedules = [];
  show = false;
  bvn = '';
  fullName = '';
  dateOfBirth = '';
  phoneNumber = '';
  endDate = '';
  errData = [];
  formattedAmount = this.currencyPipe.transform('0', '₦');
  tenures = [
    { name: '6 months', value: 6 },
    { name: '12 months', value: 12 },
    { name: '24 months', value: 24 },
    { name: '36 months', value: 36 },
    { name: '48 months', value: 48 },
  ];
  productCode;
  date;
  account;
  principal;
  comment;
  transType = 0;
  tenure = this.tenures[0].value;
  newReq = true;
  selectedBtn = true;
  selectedBtn1 = false;

  constructor(
    private auth: AuthService,
    public toast: ToastrService,
    private router: Router,
    private currencyPipe: CurrencyPipe
  ) {}
  transformAmount(element) {
    this.formattedAmount = Number(
      this.formattedAmount.replace(/[^0-9.-]+/g, '')
    ).toString();
    this.formattedAmount = this.currencyPipe.transform(
      this.formattedAmount,
      '₦'
    );

    element.target.value = this.formattedAmount;
    this.principal = Number(this.formattedAmount.replace(/[^0-9.-]+/g, ''));
  }

  ngOnInit() {
    console.log(this.bvn);
    this.bvn = this.user.bvn;
    this.phoneNumber = this.user.phone;
    this.dateOfBirth = this.user.dob;
    this.fullName = this.user.firstName + ' ' + this.user.lastName;
    this.fetchLoanTypes();
    this.fetchHistory();
    if (!this.bvn) {
      this.errData.push('BVN');
    }
    if (!this.phoneNumber) {
      this.errData.push('phone number');
    }
    if (!this.dateOfBirth) {
      this.errData.push('DOB');
    }
    if (!this.fullName) {
      this.errData.push('Full Name');
    }
    // this.fetchBvn();
    // let   user = JSON.parse(localStorage.getItem('user'));
    this.account = this.user.accountNos[0].accountNo;
  }

  getEndDate(date) {
    const newDate = date;
    const ten = this.tenure.toString().split(' ');
    newDate.setMonth(newDate.getMonth() + +ten[0]);
    this.endDate = newDate;
  }
  dateChange(event) {
    const date = new Date(event.target.value);
    this.getEndDate(date);
  }
  dateTenure(event) {
    const date = new Date(this.date);
    this.getEndDate(date);
  }

  transactionType(e) {
    this.transType = e;
  }
  fetchLoanTypes() {
    this.auth.post({}, 'Loan.LoanService.FetchLoanProducts').subscribe(
      (res: any) => {
        this.loading = false;
        console.log(res);

        if (res.status === '00') {
          this.loadTypes = res.data;
          this.productCode = res.data[0].loanProductKey;
        } else {
          this.toast.error(res.data.responseMessage, 'Error');
          this.router.navigate(['/dashboard']);
        }
      },
      (err) => {
        this.toast.error('Failed to fetch loan types', 'Error');
        this.router.navigate(['/dashboard']);
        this.loading = false;
      }
    );
  }

  fetchHistory() {
    const customerId = localStorage.getItem('loanCustomerID')
      ? localStorage.getItem('loanCustomerID')
      : '';
    this.auth
      .post(
        { customerKey: customerId, accountNo: this.account },
        'Loan.LoanService.FetchCustomerLoans'
      )
      .subscribe(
        (res: any) => {
          console.log(res);

          if (res.status === '00') {
            this.history = res.data;
          } else {
          }
        },
        (err) => {}
      );
  }

  repay(key) {
    this.loading = true;
    this.auth
      .post(
        {
          loanAccountKey: key,
        },
        'Loan.LoanService.FetchCustomerLoanRepaymentSchedule'
      )
      .subscribe(
        (res: any) => {
          this.loading = false;
          console.log(res);

          if (res.status === '00') {
            this.repaySchedules = res.data;
            this.transType = 3;
          } else {
            this.toast.error(res.data.responseMessage, 'Error');
            this.transType = 0;
          }
        },
        (err) => {
          this.toast.error('Check your internet connection', 'Error');
          this.transType = 0;

          this.loading = false;
        }
      );
  }

  fetchSchedule() {
    this.loading = true;
    this.auth
      .post(
        {
          Principal: this.principal,
          Tenure: this.tenure,
          StartDate: this.date,
          LoanKey: this.productCode,
        },
        'Loan.LoanService.CheckRepaymentSchedule'
      )
      .subscribe(
        (res: any) => {
          this.loading = false;
          console.log(res);

          if (res.status === '00') {
            this.schedules = res.data;
          } else {
            this.toast.error(res.data.responseMessage, 'Error');
            this.transType = 0;
          }
        },
        (err) => {
          this.toast.error('Failed to fetch loan types', 'Error');
          this.transType = 0;

          this.loading = false;
        }
      );
  }
  checkEligible() {
    this.loading = true;

    if (this.errData.length > 0) {
      let missing = '';
      for (let i = 0; i < this.errData.length; i++) {
        missing = missing + ' ' + this.errData[i] + ',';
      }
      this.toast.error(`Your account is missing ${missing}`, 'Error');
      this.loading = false;
      return;
    }
    const data = {
      bvn: this.bvn,
      fullName: this.fullName,
      dateOfBirth: moment(this.dateOfBirth).format('YYYY-MM-DD'),
      phoneNumber: this.phoneNumber,
      productTypeKey: this.productCode,
    };
    this.auth.post(data, 'Loan.LoanService.FetchLoanEligibility').subscribe(
      (res: any) => {
        this.loading = false;
        console.log(res);

        if (res.data[0].offerEligibilityStatus === 'Eligible') {
          this.fetchSchedule();
          this.transType = 1;
        } else {
          this.toast.error('Not Eligible for this offer', 'Error');
        }
      },
      (err) => {
        this.loading = false;
        this.toast.error('Unable to check Eligibility', 'Error');
        this.loading = false;
      }
    );
  }

  // fetchBvn() {
  //   console.log(this.bvn);

  //   const data = {
  //     bvn: this.bvn,
  //     show_detail: true,
  //   };
  //   this.auth.post(data, 'Nibss.BvnService.ValidateBvn').subscribe(
  //     (res: any) => {
  //       console.log(res);

  //       if (res.data.bvn) {
  //         this.fullName = res.data.fullName;
  //         this.dateOfBirth = res.data.dateOfBirth;
  //         this.phoneNumber = res.data.phoneNo;
  //       } else {
  //       }
  //     },
  //     (err) => {
  //       this.toast.error('Failed to fetch BVN data', 'Error');
  //       this.router.navigate(['/dashboard']);
  //     }
  //   );
  // }

  next() {
    if (!this.account) {
      this.toast.error('Account is required', 'Error');
      return true;
    }
    if (!this.productCode) {
      this.toast.error('Loan type is required', 'Error');
      return true;
    }
    if (!this.tenure) {
      this.toast.error('Tenure is required', 'Error');
      return true;
    }
    if (!this.principal) {
      this.toast.error('Amount is required', 'Error');
      return true;
    }
    if (!this.date) {
      this.toast.error('Date is required', 'Error');
      return true;
    }
    this.checkEligible();
  }
  submit() {
    this.loading = true;
    // setTimeout(() => {
    //   this.router.navigate(['/dashboard']);
    //   this.loading = false;
    // }, 3000);
    const data = {
      UserId: +this.user.userId,
      AccountNo: this.account,
      Principal: this.principal,
      Tenure: this.tenure,
      StartDate: this.date,
      ProductTypeKey: this.productCode,
      AdditionalComment: this.comment,
    };

    this.auth.post(data, 'Loan.LoanService.SubmitLoanApplication').subscribe(
      (res: any) => {
        this.loading = false;
        console.log(res);

        if (res.data.status) {
          this.toast.success('Loan request submitted successfully', 'Success');
          this.show = false;
          this.transType = 0;
          localStorage.setItem('loanAccID', res.data.loanAccountId);
          localStorage.setItem('loanCustomerID', res.data.loanCustomerId);
          this.router.navigate(['/dashboard']);
        } else {
          this.toast.error(res.data.message, 'Error');
        }
      },
      (err) => {
        this.toast.error('Check your internet connection', 'Error');
        this.loading = false;
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

  finish() {
    this.submit();
  }
  load() {
    this.loading = !this.loading;
  }
  close() {
    this.show = false;
  }
}
