import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BecomeRoyaltyComponent } from './become-royalty.component';

const routes: Routes = [
  {
    path: '',
    component: BecomeRoyaltyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BecomeRoyaltyRoutingModule {}
