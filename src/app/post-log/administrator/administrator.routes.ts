import { Routes } from '@angular/router';

import { AccountsRoutes } from './accounts/accounts.routes';

export const AdministratorRoutes: Routes = [
    { path: 'administrative', children:[
        ...AccountsRoutes
    ]}
];