import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirtimeComponent } from './airtime/airtime.component';

import { DashboardPage } from './dashboard.page';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
  },

  {
    path: 'profile',
    component: ProfileComponent
  },

  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'airtime',
    component: AirtimeComponent
  },
  {
    path: 'transfer',
    loadChildren: () => import('./transfer/transfer.module').then( m => m.TransferPageModule)
  },
  {
    path: 'borrow',
    loadChildren: () => import('./borrow/borrow.module').then( m => m.BorrowPageModule)
  },
  {
    path: 'addfund',
    loadChildren: () => import('./addfund/addfund.module').then( m => m.AddfundPageModule)
  },
  {
    path: 'bills-payments',
    loadChildren: () => import('./bills-payments/bills-payments.module').then( m => m.BillsPaymentsPageModule)
  },
  {
    path: 'loan',
    loadChildren: () => import('./loan/loan.module').then( m => m.LoanPageModule)
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
