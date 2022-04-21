import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
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
export class PinComponent implements OnInit {
  @Output()
  done: EventEmitter<any> = new EventEmitter();
  @Output()
  loading: EventEmitter<any> = new EventEmitter();
  @Output()
  close: EventEmitter<any> = new EventEmitter();
  keyPadValue = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
    { label: 6, value: 6 },
    { label: 7, value: 7 },
    { label: 8, value: 8 },
    { label: 9, value: 9 },
    { label: 0, value: 0 },
    { label: 'X', value: 11 },
  ];
  transactionPin = [];
  constructor(public toast: ToastrService) {}

  ngOnInit() {}

  getPinValue(e) {
    if (e === 11) {
      this.transactionPin.pop();
      console.log(this.transactionPin);
    } else {
      this.transactionPin.push(e);
    }
    if (this.transactionPin.length === 4) {
      this.loading.emit();

      setTimeout(() => {
        if (this.transactionPin.join('') === '0000') {
          this.done.emit();
        } else {
          this.toast.error('Invalid Pin', 'Error');
          this.loading.emit();
        }

        this.transactionPin = [];
      }, 1000);
    }
  }
  closeDraw() {
    this.close.emit();
  }
}
