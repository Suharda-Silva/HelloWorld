import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'Login';
  private uname: any;
  private pwd: any;

  constructor(login: LoginService) {
    [this.uname, this.pwd] = login.getUserData();
  }

  ngOnInit(): void {
  }

}
