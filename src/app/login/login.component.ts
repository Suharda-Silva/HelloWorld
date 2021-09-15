import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'Login';
  uname: any;
  pwd: any;
  private loginStatus: any;
  private loginAuth: any;

  constructor(loginAuth: AuthService) {
    this.loginAuth = loginAuth;
  }

  loginClick(){
    console.log(this.uname, this.pwd);
    this.loginStatus = this.loginAuth.auth(this.uname,this.pwd);
    console.log(this.loginStatus);
  }

  ngOnInit(): void {
  }

  reset(): void{
  }

}
