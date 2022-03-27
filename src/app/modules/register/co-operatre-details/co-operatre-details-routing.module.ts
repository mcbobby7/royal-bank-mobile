import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoOperatreDetailsComponent } from './co-operatre-details.component';

const routes: Routes = [
  {
    path: '',
    component: CoOperatreDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoOperatreDetailsRoutingModule {}
