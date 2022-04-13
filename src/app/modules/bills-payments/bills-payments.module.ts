import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillsPaymentsPageRoutingModule } from './bills-payments-routing.module';

import { BillsPaymentsPage } from './bills-payments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillsPaymentsPageRoutingModule
  ],
  declarations: [BillsPaymentsPage]
})
export class BillsPaymentsPageModule {}
