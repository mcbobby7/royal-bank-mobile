import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddfundPage } from './addfund.page';

const routes: Routes = [
  {
    path: '',
    component: AddfundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddfundPageRoutingModule {}
