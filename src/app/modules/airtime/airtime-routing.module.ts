import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirtimeComponent } from './airtime.component';

const routes: Routes = [
  {
    path: '',
    component: AirtimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirtimeRoutingModule { }
