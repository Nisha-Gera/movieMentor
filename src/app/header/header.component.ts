import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private routes: Router, private auth: AuthService) {}

  ngOnInit(): void {
    console.log('Header component initialized');
  }
  logout() {
    this.auth.logout();
  }
  goToHome() {
    this.routes.navigate(['login']);
  }
}
