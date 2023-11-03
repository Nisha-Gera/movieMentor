import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  loginError = '';
  passwordError = '';
  errormsg='';
  constructor(private auth: AuthService, private routes: Router) {}
  ngOnInit(): void {
    console.log('Login Init');
  }

  login() {
    if (this.username.trim().length === 0) {
      this.loginError = 'User name is Required!';
    } else if (this.password.trim().length === 0) {
      this.passwordError = 'Password is Required!';
    } else {
      let res = this.auth.login(this.username, this.password);
      if (res === 200) {
        this.routes.navigate(['home']);
      }
      if (res === 403) {
        this.errormsg = 'invalid credentials';
      }
    }
  }
}
