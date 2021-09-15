import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getUserData(){
    let uname = 'User';
    let pwd = 'Password';
    uname += '@root.app';
    return [uname, pwd];
  }

  constructor() { }
}
