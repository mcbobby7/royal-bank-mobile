import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/http/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {
  loading = false;
  source = 'assets/icon/royalty.png';
  imageSrc = 'assets/icon/success.png';
  selectedBtn = true;
  selectedBtn1 = false;
  transType = 0;
  newReq = true;
  bankName;
  accNum;
  bankCode;
  benAcc;
  name = '';
  narration;
  amount;
  timer;
  showName;
  saveBene = false;
  banks = [];
  user = JSON.parse(localStorage.getItem('user'));
  benes = localStorage.getItem('benAccs')
    ? JSON.parse(localStorage.getItem('benAccs'))
    : [];

  constructor(private auth: AuthService, public toast: ToastrService) {}

  ngOnInit() {
    console.log(this.user);
    this.getBanks();
  }

  transactionType(e) {
    this.transType = e;
  }

  create() {
    console.log('Hey');
  }
  sanitise() {
    console.log('wait');
    if (this.transType === 2) {
      if (!this.bankName || !this.bankCode) {
        this.toast.error('Bank is required', 'Error');
        return true;
      }
    }

    if (!this.benAcc) {
      this.toast.error('Beneficiary account is required', 'Error');
      return true;
    }

    if (!this.amount) {
      this.toast.error('Amount is required', 'Error');
      return true;
    }
    if (!this.name) {
      this.toast.error('please provide a valid account', 'Error');
      return true;
    }
  }
  next() {
    if (this.sanitise()) {
      return;
    }
    this.transType = 4;

    if (this.saveBene) {
      for (let i = 0; i < this.benes.length; i++) {
        console.log(this.benes[i].accNumber);
        console.log(this.accNum);
        if (this.benes[i].accNumber === this.benAcc) {
          return;
        }
      }
      this.benes.unshift({
        name: this.name,
        accNumber: this.benAcc,
        bankName: this.bankName,
        bankCode: this.bankCode,
      });
      localStorage.setItem('benAccs', JSON.stringify(this.benes));
    }
  }
  back() {
    this.transType = 0;
  }
  chooseBeneficiary(e) {
    console.log('chosen');
  }
  chnageBank(e) {
    for (let i = 0; i < this.banks.length; i++) {
      if (this.banks[i].code === e.target.value) {
        this.bankCode = this.banks[i].code;
        this.bankName = this.banks[i].name;
      }
    }
  }
  getBanks() {
    this.auth.post({}, 'Cba.BankingService.FetchBanks').subscribe(
      (res: any) => {
        console.log(res);

        if (res.status === '00') {
          // deal with register

          this.banks = res.data.data;
        } else {
          console.log(res.data.responseMessage);
        }
      },
      (err) => console.error(err.message)
    );
  }

  debounce(e) {
    if (e.length === 9) {
      if (!this.bankCode && this.transType === 2) {
        this.toast.error('please select a bank', 'Error');
        return;
      }
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.auth
          .post(
            {
              accountNo: e,
              bankCode: this.transType === 1 ? '0001' : this.bankCode,
            },
            'Nibss.NipService.NameEnquiry'
          )
          .subscribe(
            (res: any) => {
              console.log(res);

              if (res.status === '00') {
                // deal with register
                this.showName = false;
                this.name = res.data.data.fullName;
              } else {
                this.showName = true;
                this.name = 'failed, wrong details';
              }
            },
            (err) => {
              this.showName = true;
              this.name = 'failed, network error';
            }
          );
      }, 1000);
    }
    this.showName = true;
    this.name = '';
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
  delete(number) {
    console.log(this.benes);

    const data = [];
    for (let i = 0; i < this.benes.length; i++) {
      if (this.benes[i].accNumber !== number) {
        data.push(this.benes[i]);
      }
    }
    this.benes = data;
    localStorage.setItem('benAccs', JSON.stringify(this.benes));
    console.log(this.benes);
  }

  use(acc) {
    console.log(acc);
    this.name = acc.name;
    this.benAcc = acc.accNumber;
    this.bankName = acc.bankName;
    this.bankCode = acc.bankCode;
    this.newReq = true;
  }

  transfer() {
    this.loading = true;
    this.auth
      .post(
        {
          debitAccountNo: this.accNum,
          creditAccountNo: this.benAcc,
          Amount: this.amount,
          Narration: this.narration,
        },
        'Cba.BankingService.FundTransfer'
      )
      .subscribe(
        (res: any) => {
          this.loading = false;
          console.log(res);

          if (res.data.responseCode === '00') {
            this.toast.success('Transaction successful', 'Success');
            // deal with register
          } else {
            console.log(res.data.responseMessage);
            this.toast.error(res.data.responseMessage, 'Error');
          }
        },
        (err) => {
          this.loading = false;
          this.toast.error('Please try again', 'Error');
        }
      );
  }
}
