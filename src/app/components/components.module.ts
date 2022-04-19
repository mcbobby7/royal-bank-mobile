import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from '../modules/login/login.component';
import { RegisterComponent } from '../modules/register/register.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from '../core/templates/signup/signup.component';
import { WelcomeComponent } from '../modules/welcome/welcome.component';
import { ChooseSigninComponent } from '../modules/choose-signin/choose-signin.component';
import { LoaderComponent } from './loader/loader.component';
import { VerifyBvnComponent } from '../modules/register/verify-bvn/verify-bvn.component';
import { VerifyInfoComponent } from '../modules/register/verify-info/verify-info.component';
import { CreateAccountComponent } from '../modules/register/create-account/create-account.component';
import { VerifyEmailComponent } from '../modules/register/verify-email/verify-email.component';
import { VerifyPhoneComponent } from '../modules/register/verify-phone/verify-phone.component';
import { BecomeRoyaltyComponent } from '../modules/register/become-royalty/become-royalty.component';
import { SelectAccountTypeComponent } from '../modules/register/select-account-type/select-account-type.component';
import { BvnSuccessComponent } from '../modules/register/bvn-success/bvn-success.component';
import { ImageComponent } from '../modules/register/image/image.component';
import { DoneComponent } from '../modules/register/done/done.component';
import { DetailsComponent } from '../modules/register/details/details.component';
import { CoOperatreDetailsComponent } from '../modules/register/co-operatre-details/co-operatre-details.component';
import { ImageDoneComponent } from '../modules/register/image-done/image-done.component';
import { RoyalSetupComponent } from '../modules/register/royal-setup/royal-setup.component';
import { DashboardTemplateComponent } from '../core/templates/dashboard-template/dashboard-template.component';
import { InPageComponent } from '../core/templates/in-page/in-page.component';
import { ProfileComponent } from '../modules/profile/profile.component';
import { HistoryComponent } from '../modules/history/history.component';
import { AirtimeComponent } from '../modules/airtime/airtime.component';
import { CabletvComponent } from '../modules/bills-payments/cabletv/cabletv.component';
import { TransactionHistoryComponent } from '../components/transaction-history/transaction-history.component';
import { BalanceComponent } from '../components/balance/balance.component';
import { TabsPage } from '../tabs/tabs.page';
import { LimitComponent } from '../modules/account-info/limit/limit.component';
import { TransferPage } from '../modules/transfer/transfer.page';
import { ProductsComponent } from '../modules/bills-payments/products/products.component';
import { PinComponent } from './pin/pin.component';

const components = [
  TabsPage,
  BalanceComponent,
  TransactionHistoryComponent,
  LoginComponent,
  HeaderComponent,
  RegisterComponent,
  SignupComponent,
  WelcomeComponent,
  ChooseSigninComponent,
  LoaderComponent,
  VerifyBvnComponent,
  VerifyInfoComponent,
  CreateAccountComponent,
  VerifyEmailComponent,
  VerifyPhoneComponent,
  BecomeRoyaltyComponent,
  SelectAccountTypeComponent,
  BvnSuccessComponent,
  ImageComponent,
  DoneComponent,
  DetailsComponent,
  CoOperatreDetailsComponent,
  ImageDoneComponent,
  RoyalSetupComponent,
  DashboardTemplateComponent,
  InPageComponent,
  ProfileComponent,
  HistoryComponent,
  AirtimeComponent,
  CabletvComponent,
  LimitComponent,
  // TransferPage,
  ProductsComponent,
  PinComponent
];

const materialModules = [RouterModule];

@NgModule({
  declarations: [...components],
  entryComponents: [...components],
  imports: [
    CommonModule,
    ...materialModules,
    ReactiveFormsModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  exports: [CommonModule, IonicModule, ...materialModules, ...components],
})
export class ComponentsModule {}
