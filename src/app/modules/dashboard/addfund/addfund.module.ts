import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddfundPageRoutingModule } from './addfund-routing.module';

import { AddfundPage } from './addfund.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddfundPageRoutingModule
  ],
  declarations: [AddfundPage]
})
export class AddfundPageModule {}
