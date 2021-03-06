import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from '../../../app.routes';

import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { EmployeeComponent } from './employee.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [NewComponent, ListComponent, EmployeeComponent]
})
export class EmployeeModule { }
