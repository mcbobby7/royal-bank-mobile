import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountInfoPage } from './account-info.page';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LimitComponent } from './limit/limit.component';
import { ResetPinComponent } from './reset-pin/reset-pin.component';

const routes: Routes = [
  {
    path: '',
    component: AccountInfoPage
  },

  {
    path: 'change-password',
    component: ChangePasswordComponent
  },

  {
    path: 'reset-pin',
    component: ResetPinComponent
  },

  {
    path: 'limit',
    component: LimitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountInfoPageRoutingModule {}
