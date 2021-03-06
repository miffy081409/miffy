import { Routes } from '@angular/router';

import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { EmployeeComponent } from './employee.component';

export const EmployeeRoutes: Routes = [
  {path:'employee', component: EmployeeComponent, children:[
    {path: 'new', component: NewComponent},
    {path: 'list', component: ListComponent}
  ]}
];