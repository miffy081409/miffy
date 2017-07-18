import { Routes } from '@angular/router';

import { EmployeeRoutes } from './employee/employee.routes';
import { ProductRoutes } from './product/product.routes';

export const MasterfilesRoutes: Routes = [
    { path: 'masterfiles', children:[
        ...EmployeeRoutes,
        ...ProductRoutes
    ]}
];