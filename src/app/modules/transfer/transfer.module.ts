import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferPage } from './transfer.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [TransferPage],
})
export class TransferPageModule {}
