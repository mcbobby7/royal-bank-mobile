import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.scss'],
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
export class AddFundComponent implements OnInit {
  @Output()
  done: EventEmitter<any> = new EventEmitter();
  @Output()
  loading: EventEmitter<any> = new EventEmitter();
  @Output()
  exit: EventEmitter<any> = new EventEmitter();
  user = JSON.parse(localStorage.getItem('user'));

  constructor(public toast: ToastrService) {}

  ngOnInit() {}
  closeDraw() {
    this.exit.emit();
  }
}
