import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { DashboardTemplateComponent } from './core/templates/dashboard-template/dashboard-template.component';
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
    // canActivate: [AuthGuard],
    component: DashboardTemplateComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardPageModule
          ),
      },

      {
        path: 'profile',
        loadChildren: () =>
          import('./modules/dashboard/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },

      {
        path: 'airtime',
        loadChildren: () =>
          import('./modules/dashboard/airtime/airtime.module').then(
            (m) => m.AirtimeModule
          ),
      },

      {
        path: 'history',
        loadChildren: () =>
          import('./modules/dashboard/history/history.module').then(
            (m) => m.HistoryModule
          ),
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
  {
    path: 'account-info',
    loadChildren: () =>
      import('./modules/account-info/account-info.module').then(
        (m) => m.AccountInfoPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
