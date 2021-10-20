import { Radnik } from './_models/radnik';
import { AuthenticationService } from './_services/authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component } from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  Event,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'smaragd-ng';

  currentRoute: string;

  constructor(
    private router: Router,
    public spinner: NgxSpinnerService,
    private authenticationService: AuthenticationService
  ) {
    this.currentRoute = '';
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show progress spinner or progress bar
        spinner.show();
        // console.log('Route change detected');
      }
      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        spinner.hide();
        this.currentRoute = event.url;
        // console.log(event);
      }
      if (event instanceof NavigationError) {
        // Hide progress spinner or progress bar
        spinner.hide();
        // Present error to user
        console.log(event.error);
      }
    });
  }
  ngOnInit() {
    this.setCurrentRadnik();
  }

  setCurrentRadnik() {
    var storageRadnik = localStorage.getItem('TokenInfo');
    if (storageRadnik) {
      const radnik: Radnik = JSON.parse(storageRadnik);
      this.authenticationService.setCurrentRadnik(radnik);
    } else {
      this.authenticationService.setCurrentRadnik(undefined);
    }
  }
}
