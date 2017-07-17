import { Routes } from '@angular/router';

import { MasterfilesRoutes } from './masterfiles/masterfiles.routes';
import { AdministratorRoutes } from './administrator/administrator.routes';

import { PostLogComponent } from './post-log.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const PostLogRoutes: Routes = [
    {
        path: 'app', component: PostLogComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            ...MasterfilesRoutes,
            ...AdministratorRoutes,
        ]
    }
];
