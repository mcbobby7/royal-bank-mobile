import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NubanRegisterComponent } from './nuban-register.component';

const routes: Routes = [
  {
    path: '',
    component: NubanRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NubanRegisterRoutingModule {}
