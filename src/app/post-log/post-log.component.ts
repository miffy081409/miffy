import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-log',
  templateUrl: './post-log.component.html',
  styleUrls: ['./post-log.component.css']
})
export class PostLogComponent implements OnInit {

  user;

  constructor(private appService:AppService, private router:Router) { 
    this.user = this.appService.GetUser();
    if( this.user == undefined || this.user == null){
      this.router.navigateByUrl("/");
    }
  }

  ngOnInit() {
    //check if user is already logged in otherwise redirects this to login page
    //retrieve values from global service
  }
}
