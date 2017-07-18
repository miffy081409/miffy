import { Routes } from '@angular/router';

import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { ProductComponent } from './product.component';

export const ProductRoutes: Routes = [
  {path:'product', component: ProductComponent, children:[
    {path: 'new', component: NewComponent},
    {path: 'list', component: ListComponent}
  ]}
];