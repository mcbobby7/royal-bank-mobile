import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
  },

  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  // },

  // {
  //   path: 'history',
  //   component: HistoryComponent,
  // },
  // {
  //   path: 'airtime',
  //   component: AirtimeComponent,
  // },
  // {
  //   path: 'transfer',
  //   loadChildren: () =>
  //     import('../transfer/transfer.module').then((m) => m.TransferPageModule),
  // },
  // {
  //   path: 'borrow',
  //   loadChildren: () =>
  //     import('../borrow/borrow.module').then((m) => m.BorrowPageModule),
  // },
  // {
  //   path: 'addfund',
  //   loadChildren: () =>
  //     import('../addfund/addfund.module').then((m) => m.AddfundPageModule),
  // },
  // {
  //   path: 'loan',
  //   loadChildren: () =>
  //     import('../loan/loan.module').then((m) => m.LoanPageModule),
  // },

  // {
  //   path: 'account-info',
  //   loadChildren: () =>
  //     import('../account-info/account-info.module').then(
  //       (m) => m.AccountInfoPageModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
