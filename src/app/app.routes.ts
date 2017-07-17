import { Routes } from '@angular/router';
import { AccountManagementRoutes } from './account-management/account-management.routes';
import {PostLogRoutes} from './post-log/post-log.route';

export const routes: Routes = [
  ...AccountManagementRoutes,
  ...PostLogRoutes,
];
