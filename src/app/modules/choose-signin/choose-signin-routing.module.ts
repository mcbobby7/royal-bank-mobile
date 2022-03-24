import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseSigninComponent } from './choose-signin.component';

const routes: Routes = [
  {
    path: '',
    component: ChooseSigninComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseSigninRoutingModule {}
