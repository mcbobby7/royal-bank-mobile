import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectAccountTypeComponent } from './select-account-type.component';

const routes: Routes = [
  {
    path: '',
    component: SelectAccountTypeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectAccountTypeRoutingModule {}
