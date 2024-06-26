import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'base',
    loadComponent: () => import('./base/base.page').then((m) => m.BasePage),
  },
  {
    path: '',
    redirectTo: 'base',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
];
