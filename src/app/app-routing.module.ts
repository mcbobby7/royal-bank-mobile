import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PinComponent } from './components/pin/pin.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DashboardTemplateComponent } from './core/templates/dashboard-template/dashboard-template.component';
import { InPageComponent } from './core/templates/in-page/in-page.component';
import { CabletvComponent } from './modules/bills-payments/cabletv/cabletv.component';
import { SupportComponent } from './modules/support/support.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'ds',
    loadChildren: () =>
      import(
        './core/templates/dashboard-template/dashboard-template.module'
      ).then((m) => m.DashboardTemplateModule),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardTemplateComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardPageModule
          ),
      },
    ],
  },
  {
    path: 'action',
    // canActivate: [AuthGuard],
    component: InPageComponent,
    children: [
      {
        path: 'account-info',
        loadChildren: () =>
          import('./modules/account-info/account-info.module').then(
            (m) => m.AccountInfoPageModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardPageModule
          ),
      },
      {
        path: 'tab1',
        loadChildren: () =>
          import('../app/modules/transfer/transfer.module').then(
            (m) => m.TransferPageModule
          ),
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('../app/modules/account-info/account-info.module').then(
            (m) => m.AccountInfoPageModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./modules/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'airtime',
        loadChildren: () =>
          import('./modules/airtime/airtime.module').then(
            (m) => m.AirtimeModule
          ),
      },

      {
        path: 'history',
        loadChildren: () =>
          import('./modules/history/history.module').then(
            (m) => m.HistoryModule
          ),
      },
      {
        path: 'loan',
        loadChildren: () =>
          import('./modules/loan/loan.module').then((m) => m.LoanPageModule),
      },
      {
        path: 'cable-tv',
        component: CabletvComponent,
      },

      {
        path: 'transfer',
        loadChildren: () =>
          import('./modules/transfer/transfer.module').then(
            (m) => m.TransferPageModule
          ),
      },
      {
        path: 'withdraw',
        loadChildren: () =>
          import('./withdraw/withdraw.module').then((m) => m.WithdrawModule),
      },

      {
        path: 'bills-payment',
        loadChildren: () =>
          import('./modules/bills-payments/bills-payments.module').then(
            (m) => m.BillsPaymentsPageModule
          ),
      },
      {
        path: 'bills-payment',
        loadChildren: () =>
          import('./modules/bills-payments/bills-payments.module').then(
            (m) => m.BillsPaymentsPageModule
          ),
      },
      {
        path: 'pin',
        component: PinComponent,
      },
      {
        path: 'support',
        component: SupportComponent,
      },
    ],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  // {
  //   path: 'select-account',
  //   loadChildren: () =>
  //   import('./modules/register/select-account-type/select-account-type.module').then((m) => m.SelectAccountTypeModule)
  // },
  {
    path: 'choose-signin',
    loadChildren: () =>
      import('./modules/choose-signin/choose-signin.module').then(
        (m) => m.ChooseSigninModule
      ),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./modules/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
