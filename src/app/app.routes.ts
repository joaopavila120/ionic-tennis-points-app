import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'users',
    loadComponent: () => import('./users/users.page').then(m => m.UsersPage),
  },
  {
    path: 'user-edit/:id',
    loadComponent: () => import('./user-edit/user-edit.page').then(m => m.UserEditPage), // Certifique-se de que isso existe
  },
  {
    path: 'tennis-control',
    loadComponent: () => import('./tennis-control/tennis-control.page').then(m => m.TennisControlPage),
  },
];
