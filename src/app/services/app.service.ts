import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

User;

  constructor() { }

  SetUser(user)
  {
    sessionStorage.setItem("User", JSON.stringify(user));
  }

  GetUser()
  {
    return JSON.parse(sessionStorage.getItem("User"));
  }

  ClearSession()
  {
    sessionStorage.clear();
  }

}
