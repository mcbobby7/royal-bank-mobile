import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [],
  },
  {
    path: 'become-royalty',
    loadChildren: () =>
      import('./become-royalty/become-royalty.module').then(
        (m) => m.BecomeRoyaltyModule
      ),
  },
  {
    path: 'nuban',
    loadChildren: () =>
      import('./nuban-register/nuban-register.module').then(
        (m) => m.NubanRegisterModule
      ),
  },
  {
    path: 'select-account',
    loadChildren: () =>
      import('./select-account-type/select-account-type.module').then(
        (m) => m.SelectAccountTypeModule
      ),
  },
  {
    path: 'bvn/:mode',
    loadChildren: () =>
      import('./verify-bvn/verify-bvn.module').then((m) => m.VerifyBvnModule),
  },
  {
    path: 'bvn-success/:mode',
    loadChildren: () =>
      import('./bvn-success/bvn-success.module').then(
        (m) => m.BvnSuccessModule
      ),
  },
  {
    path: 'phone/:number/:mode',
    loadChildren: () =>
      import('./verify-phone/verify-phone.module').then(
        (m) => m.VerifyPhoneModule
      ),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./create-account/create-account.module').then(
        (m) => m.CreateAccountModule
      ),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./details/details.module').then((m) => m.DetailsModule),
  },
  {
    path: 'royal-setup',
    loadChildren: () =>
      import('./royal-setup/royal-setup.module').then(
        (m) => m.RoyalSetupModule
      ),
  },
  {
    path: 'cop-details',
    loadChildren: () =>
      import('./co-operatre-details/co-operatre-details.module').then(
        (m) => m.CoOperatreDetailsModule
      ),
  },
  {
    path: 'email/:mode',
    loadChildren: () =>
      import('./verify-email/verify-email.module').then(
        (m) => m.VerifyEmailModule
      ),
  },
  {
    path: 'image',
    loadChildren: () =>
      import('./image/image.module').then((m) => m.ImageModule),
  },
  {
    path: 'image-done',
    loadChildren: () =>
      import('./image-done/image-done.module').then((m) => m.ImageDoneModule),
  },
  {
    path: 'done',
    loadChildren: () => import('./done/done.module').then((m) => m.DoneModule),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
