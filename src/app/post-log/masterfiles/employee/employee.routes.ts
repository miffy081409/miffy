import { Routes } from '@angular/router';

import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';

export const EmployeeRoutes: Routes = [
  {path: 'employee/new', component: NewComponent},
  {path: 'employee/list', component: ListComponent}
];