import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EmployeeModule } from './employee/employee.module';
import { ProductModule } from './product/product.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EmployeeModule,
    ProductModule
  ],
  declarations: []
})
export class MasterfilesModule { }
