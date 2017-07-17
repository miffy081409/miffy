import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm: FormGroup;
message:string;

  constructor(private appService:AppService, private router:Router) { 
    //check if the environment is development so we can bypass the login part
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      Username: new FormControl(""),
      Password: new FormControl("")
    });

    this.message = "";
  }

  OnSubmit = function(formValues){
    var model = new UserModel();
    model.Username = formValues.Username;
    model.Password = formValues.Password;
    
    if(model.IsValidated())
    {
      //create a global service to hold values that is needed in the app and those values are from the server
      this.appService.SetUser(model);
      this.router.navigateByUrl("/app/dashboard");
    }
    else
    {
      this.message = model.ErrorMessage;
    }
  }
}


class UserModel {

  Username: string;
  Password: string;
  ErrorMessage: string;

  constructor() {
    this.Username = "";
    this.Password = "";
    this.ErrorMessage = "";
  }

  IsValidated = function(){
    if(this.Username == '')
    {
      this.ErrorMessage = "Username is required.";
      return false;
    }

    if(this.Password == '')
    {
      this.ErrorMessage = "Password is required.";
      return false;
    }

    this.ErrorMessage = "";
    return true;
  }
}