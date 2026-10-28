import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: '',
    loadComponent: () => import('./layout/app-shell.component').then((m) => m.AppShellComponent),
    children: [
      {
        path: 'requests',
        loadChildren: () =>
          import('./features/requests/requests.routes').then((m) => m.REQUESTS_ROUTES),
      },
      {
        path: 'assets',
        loadChildren: () => import('./features/assets/assets.routes').then((m) => m.ASSETS_ROUTES),
      },
      {
        path: 'administration',
        loadChildren: () =>
          import('./features/administration/administration.routes').then(
            (m) => m.ADMINISTRATION_ROUTES,
          ),
      },
      { path: '', pathMatch: 'full', redirectTo: 'requests' },
    ],
  },
  { path: '**', redirectTo: '' },
];
