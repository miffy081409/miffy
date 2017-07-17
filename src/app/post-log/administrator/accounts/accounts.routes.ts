import { Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';

export const AccountsRoutes: Routes = [
  {path: 'account/new', component: NewComponent},
  {path: 'account/list', component: ListComponent}
];