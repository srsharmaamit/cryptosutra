import { Route, Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./main/auth/auth-routing').then(
        (component: { authRoutes: Route[] }) => component.authRoutes
      ),
  },
  {
    path: 'sutra',
    loadChildren: () =>
      import('./main/dashboard/dashboard-routing').then(
        (component: { dashboardRoutes: Route[] }) => component.dashboardRoutes
      ),
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];
