import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageDoneComponent } from './image-done.component';

const routes: Routes = [
  {
    path: '',
    component: ImageDoneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageDoneRoutingModule {}
