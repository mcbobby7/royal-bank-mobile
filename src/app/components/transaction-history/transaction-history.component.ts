import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/http/services/auth.service';
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
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss'],
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
export class TransactionHistoryComponent implements OnInit {
  @ViewChild('recipt', { static: false }) recipt: ElementRef;

  show = false;
  user = JSON.parse(localStorage.getItem('user'));
  data: any = JSON.parse(localStorage.getItem('transactions'));
  loading = false;
  details: any = {};
  tran: any = {};
  visible = false;
  transType: string;
  url = '';
  constructor(
    private auth: AuthService,
    private toast: ToastrService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit() {
    setInterval(() => {
      this.getTransactions();
    }, 60000);
    this.getTransactions();
  }

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

  viewBalance() {
    this.show = !this.show;
  }

  getTransactions() {
    if (
      !this.user ||
      !this.user.accountNos ||
      this.user.accountNos.length === 0
    ) {
      return;
    }
    const data = {
      accountId: +this.user.accountNos[0].accountId,
    };
    this.auth
      .post(data, 'Cba.BankingService.FetchAccountTransactions')
      .subscribe(
        (res: any) => {
          console.log(res);

          this.loading = false;
          if (res.data.responseCode === '00') {
            if (JSON.stringify(this.data) !== JSON.stringify(res.data.data)) {
              this.data = res.data.data;
              localStorage.setItem(
                'transactions',
                JSON.stringify(res.data.data)
              );
            }
          } else {
            console.log(res);
          }
        },
        (err) => {
          console.error(err.message);
          this.loading = false;
        }
      );
  }
  setTrans(transaction) {
    this.loading = true;
    const payload = {
      accountId: +this.user.accountNos[0].accountId,
      transactionId: transaction.transactionId,
    };
    this.auth
      .post(payload, 'Cba.BankingService.FetchTransactionDetails')
      .subscribe(
        (res: any) => {
          this.loading = false;
          console.log(res);

          if (res.data.responseCode === '00') {
            this.details = res.data.data;
            this.tran = transaction;
            this.transType = transaction.transactionType;
            this.setVissible();
          } else {
            this.toast.error(res.data.responseMessage, 'Error');
          }
        },
        (err) => {
          this.toast.error('Failed to fetch transaction', 'Error');
          // this.router.navigate(['/dashboard']);
          this.loading = false;
        }
      );

    console.log(transaction);
  }
  setVissible() {
    this.visible = !this.visible;
  }
}
