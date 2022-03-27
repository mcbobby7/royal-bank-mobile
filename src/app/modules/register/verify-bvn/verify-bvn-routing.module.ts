import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyBvnComponent } from './verify-bvn.component';

const routes: Routes = [
  {
    path: '',
    component: VerifyBvnComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyBvnRoutingModule {}
