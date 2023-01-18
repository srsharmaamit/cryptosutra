import { Route, Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sutra',
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
    redirectTo: 'sutra',
  },
];
