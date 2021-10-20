import { AuthenticationService } from './../_services/authentication.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public router: Router,
    public authenticationService: AuthenticationService
  ) {}

  public isMenuCollapsed = true;

  ngOnInit(): void {
    this.getCurrentRadnik();
  }

  getCurrentRadnik() {
    this.authenticationService.currentRadnik$.subscribe(
      (radnik) => {},
      (error) => {
        console.log(error);
      }
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl('/');
  }
}
