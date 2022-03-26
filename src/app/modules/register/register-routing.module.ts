import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { RegisterComponent } from './register.component';
import { SelectAccountTypeComponent } from './select-account-type/select-account-type.component';
import { VerifyBvnComponent } from './verify-bvn/verify-bvn.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { VerifyInfoComponent } from './verify-info/verify-info.component';
import { VerifyPhoneComponent } from './verify-phone/verify-phone.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
    ],
  },
{
  path: 'select-account',
  component: SelectAccountTypeComponent
},

{
  path: 'verify-bvn',
  component: VerifyBvnComponent
},

{
  path: 'verify-info',
  component: VerifyInfoComponent
},

{
  path: 'create-account',
  component: CreateAccountComponent
},

{
  path: 'verify-phone',
  component: VerifyPhoneComponent
},

{
  path: 'verify-email',
  component: VerifyEmailComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
