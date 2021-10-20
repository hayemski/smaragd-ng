import { Radnik } from './../_models/radnik';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentRadnikSubject = new ReplaySubject<Radnik>(1);
  currentRadnik$ = this.currentRadnikSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http
      .post<Radnik>('http://localhost:8081/api/Login', { username, password })
      .pipe(
        map((radnik: Radnik) => {
          // login successful if there's a jwt token in the response
          if (radnik) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('TokenInfo', JSON.stringify(radnik));
            console.log(radnik);
            this.setCurrentRadnik(radnik);
          }
          return radnik;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('TokenInfo');
    this.currentRadnikSubject.next(undefined);
  }

  setCurrentRadnik(radnik: Radnik | undefined) {
    this.currentRadnikSubject.next(radnik);
  }
}
