import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getUserData(){
    let uname = 'user';
    let pwd = 'password';
    uname += '@root.app';
    return [uname, pwd];
  }

  constructor() { }
}
