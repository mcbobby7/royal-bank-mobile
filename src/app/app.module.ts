import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardPage } from './modules/dashboard/dashboard.page';
import { TransferPage } from './modules/transfer/transfer.page';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { FormsModule } from '@angular/forms';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { NgIdleModule } from '@ng-idle/core';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
// import { Ng9PasswordStrengthBarModule } from 'ng9-password-strength-bar';

@NgModule({
  declarations: [AppComponent, DashboardPage, TransferPage, WithdrawComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    ToastrModule.forRoot(),
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ComponentsModule,
    BrowserAnimationsModule,
    FormsModule,
    // Ng9PasswordStrengthBarModule,
    // NgIdleModule.forRoot(),
    NgIdleKeepaliveModule.forRoot(),
  ],
  providers: [
    Uid,
    AndroidPermissions,
    SplashScreen,
    CurrencyPipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
