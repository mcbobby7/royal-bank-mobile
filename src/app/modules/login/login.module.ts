import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
// import { ComponentsModule } from '../../components/components.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

@NgModule({
  declarations: [],
  imports: [CommonModule, LoginRoutingModule, IonicModule],
})
export class LoginModule {}
