import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from '../../services/app.service';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private appService:AppService) { 
    
  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    var bodyClass = $('body').hasClass("nav-md");
    console.log(bodyClass);
  }

}
