import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BvnSuccessComponent } from './bvn-success.component';

const routes: Routes = [
  {
    path: '',
    component: BvnSuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BvnSuccessRoutingModule {}
