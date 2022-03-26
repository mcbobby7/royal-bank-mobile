import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: 'register',
    // canActivate: [AuthGuard],
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
