import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {

  transType = 'debit';
  counter = 0;
  historyForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    transType: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {}

}
