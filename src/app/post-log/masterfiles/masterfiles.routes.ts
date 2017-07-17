import { Routes } from '@angular/router';

import { EmployeeRoutes } from './employee/employee.routes';

export const MasterfilesRoutes: Routes = [
    { path: 'masterfiles', children:[
        ...EmployeeRoutes
    ]}
];