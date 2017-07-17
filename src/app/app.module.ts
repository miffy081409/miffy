import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { AccountManagementModule } from './account-management/account-management.module';
import {PostLogModule} from './post-log/post-log.module';

import { AppComponent } from './app.component';

import { AppService } from './services/app.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AccountManagementModule,
    PostLogModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
