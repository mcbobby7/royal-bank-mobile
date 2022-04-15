import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillsPaymentsPage } from './bills-payments.page';
import { CabletvComponent } from './cabletv/cabletv.component';

const routes: Routes = [
  {
    path: '',
    component: BillsPaymentsPage
  },
  {
    path: 'CableTv',
    component: CabletvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillsPaymentsPageRoutingModule {}
