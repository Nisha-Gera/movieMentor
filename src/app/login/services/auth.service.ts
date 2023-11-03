import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  constructor(private routes: Router) {}
  ngOnInit(): void {
    console.log('Auth service initialized');
  }

  login(username: string, password: string) {
    if (username === 'admin@gmail.com' && password === 'admin') {
      return 200;
    } else {
      return 403;
    }
  }
  logout(){
this.routes.navigate(['login'])
  }
}
