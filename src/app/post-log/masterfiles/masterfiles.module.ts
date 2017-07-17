import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EmployeeModule } from './employee/employee.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EmployeeModule
  ],
  declarations: []
})
export class MasterfilesModule { }
