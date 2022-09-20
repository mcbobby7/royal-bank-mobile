import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/http/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  group,
  query,
  stagger,
  keyframes,
} from '@angular/animations';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { FileSharer } from '@byteowls/capacitor-filesharer';
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('500ms ease-in', style({ transform: 'translateY(-0%)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class TransferPage implements OnInit {
  @ViewChild('recipt', { static: false }) recipt: ElementRef;

  show = false;
  loading = false;
  source = 'assets/icon/royalty.png';
  imageSrc = 'assets/icon/done.png';
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
  limitInter;
  limitIntra;
  nameLoading = false;
  formattedAmount = this.currencyPipe.transform('0', '₦');
  user = JSON.parse(localStorage.getItem('user'));
  benes = localStorage.getItem('benes')
    ? JSON.parse(localStorage.getItem('benes'))
    : [];
  visible = false;
  searchBank = '';
  searchBankTemp = [];
  url = '';
  interData: any;

  constructor(
    private auth: AuthService,
    public toast: ToastrService,
    private router: Router,
    private currencyPipe: CurrencyPipe,
    private change: ChangeDetectorRef
  ) {}

  downloadButtonClick(url) {
    const photo = url;
    const first = photo.split(',');
    const mainImage = first[1];
    const extension = first[0].split('image/');
    const mainExtension = extension[1].split(';')[0];

    FileSharer.share({
      filename: 'royal-receipt.png',
      base64Data: mainImage,
      contentType: `image/${mainExtension}`,
    })
      .then(() => {
        // do sth
        console.log('done');
      })
      .catch((error) => {
        console.error('File sharing failed', error.message);
      });
  }

  getReciept() {
    this.change.detectChanges();
    console.log('node', this.recipt.nativeElement);
    // console.log('node', this.recipt.nativeElement);

    htmlToImage
      .toPng(this.recipt.nativeElement)
      .then((dataUrl) => {
        this.change.detectChanges();
        this.url = dataUrl;
        console.log('url', dataUrl);
        this.downloadButtonClick(dataUrl);
        // const img = new Image();
        // img.src = dataUrl;
        // document.body.appendChild(img);
      })
      .catch((error) => {
        console.error('oops, something went wrong!', error);
      });
  }

  setVissible() {
    this.visible = !this.visible;
  }
  refchg(value) {
    console.log(value);
    this.searchBankTemp = this.banks.filter(
      (t) => t.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }
  setBank(bank) {
    this.bankCode = bank.code;
    this.bankName = bank.name;
    this.setVissible();
  }

  transformAmount(element) {
    this.formattedAmount = Number(
      this.formattedAmount.replace(/[^0-9.-]+/g, '')
    ).toString();
    this.formattedAmount = this.currencyPipe.transform(
      this.formattedAmount,
      '₦'
    );

    element.target.value = this.formattedAmount;
    this.amount = Number(this.formattedAmount.replace(/[^0-9.-]+/g, ''));
  }

  ngOnInit() {
    this.getBen();
    console.log(this.user);
    this.accNum = this.user.accountNos[0].accountNo;
    this.getBanks();
    this.auth
      .post(
        {
          UserId: +this.user.userId,
          Channel: 'MobileApp',
        },
        'UserManager.UserService.FetchUserTransactionLimit'
      )
      .subscribe(
        (res: any) => {
          console.log(res);

          if (res.status === '00') {
            this.limitInter = res.data.data[0].interLimit;
            this.limitIntra = res.data.data[0].intraLimit;
            console.log(this.limitInter, this.limitIntra);

            // deal with register
          } else {
          }
        },
        (err) => {}
      );
  }

  transactionType(e) {
    this.transType = e;
  }

  create() {
    this.router.navigate(['/dashboard']);
    this.transType = 0;
  }
  sanitise() {
    if (this.user.hasBVN === false) {
      this.toast.error(
        `You have to verify your BVN to carry out transactions`,
        'Error'
      );
      return true;
    }
    if (this.transType === 1) {
      if (this.amount > this.limitIntra) {
        this.toast.error(`Your transfer limit is ${this.limitIntra}`, 'Error');
        return true;
      }
    }
    console.log('wait');
    if (this.transType === 2) {
      if (!this.bankName || !this.bankCode) {
        this.toast.error('Bank is required', 'Error');
        return true;
      }
      if (this.amount > this.limitInter) {
        this.toast.error(`Your transfer limit is ${this.limitInter}`, 'Error');
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
    if (!this.name || this.showName) {
      this.toast.error('please provide a valid account', 'Error');
      return true;
    }
  }
  next() {
    if (this.sanitise()) {
      return;
    }
    if (this.accNum === this.benAcc) {
      this.toast.error('You cant make transfer to your account', 'Error');
      return false;
    }
    this.transType = 4;
  }
  back() {
    this.transType = 0;
  }
  chooseBeneficiary(e) {
    console.log('chosen');
  }
  // chnageBank(e) {
  //   for (let i = 0; i < this.banks.length; i++) {
  //     if (this.banks[i].code === e.target.value) {
  //       this.bankCode = this.banks[i].code;
  //       this.bankName = this.banks[i].name;
  //     }
  //   }
  // }
  getBanks() {
    this.auth.post({}, 'Cba.BankingService.FetchBanks').subscribe(
      (res: any) => {
        console.log(res);

        if (res.status === '00') {
          // deal with register

          this.banks = res.data.data.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          this.searchBankTemp = res.data.data.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          this.bankCode = this.banks[0].code;
        } else {
          console.log(res.data.responseMessage);
        }
      },
      (err) => console.error(err.message)
    );
  }
  getBen() {
    this.auth
      .post(
        {
          UserId: +this.user.userId,
        },
        'Cba.BankingService.FetchAllBeneficiary'
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res.data.responseCode === '00') {
            // deal with register

            this.benes = res.data.data.sort((a, b) => b.id - a.id);
            this.benes = this.benes.filter((ben) => ben.name === 'Transfer');
            localStorage.setItem(
              'benes',
              JSON.stringify(res.data.data.sort((a, b) => b.id - a.id))
            );
          } else {
          }
        },
        (err) => {}
      );
  }

  addBen() {
    this.auth
      .post(
        {
          Name: 'Transfer',
          AccountName: this.name,
          AccountNumber: this.benAcc,
          Company: this.bankName + '/' + this.bankCode,
          UserId: +this.user.userId,
        },
        'Cba.BankingService.AddBeneficiary'
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res.data.responseCode === '00') {
            // deal with register
            this.getBen();
          } else {
          }
        },
        (err) => {}
      );
  }

  debounce(e) {
    if (e.length === 10) {
      if (!this.bankCode && this.transType === 2) {
        this.toast.error('please select a bank', 'Error');
        return;
      }
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.nameLoading = true;
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
                if (this.transType === 1) {
                  if (!res.data.data.fullName) {
                    this.name = 'No record found';
                    this.showName = true;
                    this.nameLoading = false;
                  } else {
                    this.name = res.data.data.fullName;
                    this.nameLoading = false;
                  }
                } else {
                  if (!res.data.data.accountNameField) {
                    this.name = 'No record found';
                    this.showName = true;
                    this.nameLoading = false;
                  } else {
                    this.name = res.data.data.accountNameField;
                    this.interData = res.data.data;
                    console.log(this.interData);
                    this.nameLoading = false;
                  }
                }
              } else {
                this.showName = true;
                this.name = 'failed, wrong details';
                this.nameLoading = false;
              }
            },
            (err) => {
              this.showName = true;
              this.name = 'failed, network error';
              this.nameLoading = false;
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
    this.loading = true;
    this.auth
      .post(
        {
          Id: number,
        },
        'Cba.BankingService.RemoveBeneficiary'
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          this.loading = false;
          if (res.data.responseCode === '00') {
            // deal with register
            const data = [];
            for (let i = 0; i < this.benes.length; i++) {
              if (this.benes[i].id !== number) {
                data.push(this.benes[i]);
              }
            }
            this.benes = data;
          } else {
          }
        },
        (err) => {}
      );
  }

  use(acc) {
    console.log(acc);
    this.name = acc.accountName;
    this.benAcc = acc.accountNumber;
    this.bankName = acc.company.split('/')[0];
    this.bankCode = acc.company.split('/')[1];
    this.newReq = true;
    this.showName = false;
    if (
      acc.company.split('/')[0] === 'Royal Bank' ||
      acc.company.split('/')[0] === 'ROYAL BANK'
    ) {
      this.transType = 1;
    }
    console.log(acc.company.split('/')[0], acc.company.split('/')[1]);
  }

  transfer() {
    this.loading = true;
    let acc;
    for (let i = 0; i < this.user.accountNos.length; i++) {
      if (this.accNum === this.user.accountNos[i].accountNo) {
        acc = this.user.accountNos[i].accountId;
      }
    }

    this.auth
      .post(
        {
          clientId: this.user.clientId,
          accountId: acc,
        },
        'Cba.BankingService.FetchAccountBalance'
      )
      .subscribe(
        (res: any) => {
          console.log(res.data.data.balance);
          if (res.data.responseCode === '00') {
            console.log(res.data.data.balance, +this.amount);

            if (+this.amount > res.data.data.balance) {
              this.loading = false;
              this.toast.error('Insufficient balance', 'Error');
              return;
            } else {
              this.bankName = this.bankName ? this.bankName : 'Royal Bank';
              console.log(this.bankName);

              if (
                !this.bankName ||
                this.bankName === 'Royal Bank' ||
                this.bankName === 'royal Bank'
              ) {
                this.auth
                  .post(
                    {
                      debitAccountNo: this.accNum,
                      creditAccountNo: this.benAcc,
                      Amount: +this.amount,
                      Narration: this.narration,
                    },
                    'Cba.BankingService.FundTransfer'
                  )
                  .subscribe(
                    (res: any) => {
                      this.loading = false;
                      console.log(res);

                      if (res.data.responseCode === '00') {
                        this.transType = 3;
                        this.show = false;
                        if (this.saveBene) {
                          for (let i = 0; i < this.benes.length; i++) {
                            if (this.benes[i].accountNumber === this.benAcc) {
                              return;
                            }
                          }
                          this.addBen();
                        }
                        // deal with register
                      } else {
                        this.loading = false;
                        console.log(res.data.responseMessage);
                        this.toast.error(res.data.responseMessage, 'Error');
                      }
                    },
                    (err) => {
                      this.loading = false;
                      this.toast.error('Please try again', 'Error');
                    }
                  );
              } else {
                const data = {
                  Amount: +this.amount,
                  SessionID: this.interData.sessionIDField,
                  DestinationInstitutionCode:
                    this.interData.destinationInstitutionCodeField,
                  ChannelCode: '2',
                  BeneficiaryAccountName: this.interData.accountNameField,
                  BeneficiaryAccountNumber: this.interData.accountNumberField,
                  BeneficiaryBankVerificationNumber:
                    this.interData.bankVerificationNumberField,
                  BeneficiaryKYCLevel: this.interData.kYCLevelField,
                  OriginatorAccountName:
                    this.user.firstName + ' ' + this.user.lastName,
                  OriginatorAccountNumber: this.accNum,
                  OriginatorBankVerificationNumber: this.user.bvn,
                  OriginatorKYCLevel: '1',
                  TransactionLocation: '6.4300747,3.4110715',
                  Narration: this.narration,
                };
                this.auth
                  .post(data, 'Nibss.NipService.InterFundTransfer')
                  .subscribe(
                    (res: any) => {
                      this.loading = false;
                      console.log(res);

                      if (res.data.responseCode === '00') {
                        this.transType = 3;
                        this.show = false;
                        // deal with register
                      } else {
                        this.loading = false;
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
            // deal with register
          } else {
            this.loading = false;
            this.toast.error('Please try again', 'Error');
          }
        },
        (err) => {
          this.loading = false;
          this.toast.error('Please try again', 'Error');
        }
      );
  }
  finish() {
    this.transfer();
  }
  load() {
    this.loading = !this.loading;
  }
  close() {
    this.show = false;
  }
}
