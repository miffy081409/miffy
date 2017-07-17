import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from '../app.routes';

import { AppService } from '../services/app.service';

import { PostLogComponent } from './post-log.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MasterfilesModule } from './masterfiles/masterfiles.module';
import { AdministratorModule } from './administrator/administrator.module'; 

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MasterfilesModule,
    AdministratorModule,
  ],
  providers:[AppService],
  declarations: 
  [
    PostLogComponent,
    SidebarComponent,
    TopNavComponent,
    DashboardComponent,
  ]
})
export class PostLogModule { }
