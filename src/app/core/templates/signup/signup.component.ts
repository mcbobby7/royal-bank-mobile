import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @Input() caption;
  @Input() subtitle;
  @Input() source;
  @Input() buttonTextOne;
  @Input() buttonTextTwo;
  @Input() buttonActionOne;
  @Input() buttonActionTwo;
  @Input() customForm: boolean;
  constructor() {}

  ngOnInit() {}
}
