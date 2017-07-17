import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  username:string;

  constructor(private appService:AppService, private router:Router) { 
    this.username = appService.GetUser().Username;
  }

  ngOnInit() {
  }

  onLogout (){
    this.appService.ClearSession();
    this.router.navigateByUrl("/");
  }
}
