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

const components = [
  LoginComponent,
  HeaderComponent,
  RegisterComponent,
  SignupComponent,
  WelcomeComponent,
  ChooseSigninComponent,
  LoaderComponent,
];

const materialModules = [RouterModule];

@NgModule({
  declarations: [...components],
  entryComponents: [...components],
  imports: [
    CommonModule,
    ...materialModules,
    ReactiveFormsModule,
    IonicModule.forRoot(),
  ],
  exports: [CommonModule, IonicModule, ...materialModules, ...components],
})
export class ComponentsModule {}
