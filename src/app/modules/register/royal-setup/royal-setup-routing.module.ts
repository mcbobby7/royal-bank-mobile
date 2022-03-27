import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoyalSetupComponent } from './royal-setup.component';

const routes: Routes = [
  {
    path: '',
    component: RoyalSetupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoyalSetupRoutingModule {}
