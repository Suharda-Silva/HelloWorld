import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Aurth service handles the login authorisations
  private uname: any;
  private pwd: any;

  constructor(login: LoginService) {
    [this.uname, this.pwd] = login.getUserData();
   }

  auth(unameVal:string, pwdValue:string){
    unameVal += '@root.app';
    if (unameVal==this.uname && pwdValue==this.pwd){
      return true;
    } else {
      return false;
    }
  }
  
}
