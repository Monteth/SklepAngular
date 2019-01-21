import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {map} from 'rxjs/operators'
import {API_URL} from '../app.constrants'
import {HelloBean} from './data/welcome-data.service'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  getUserByEmail(email: String) {
    return this.http.get(
      `${API_URL}/user/${email}`)
  }


  executeAuthenticationService(username, password) {

    // const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    const headers = new HttpHeaders({
      // Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`,
      {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username);
          // sessionStorage.setItem('token', basicAuthHeaderString);
          return data;
        }
      )
    );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser')
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token')
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser')
    sessionStorage.removeItem('token')
  }
}

export class AuthenticationBean {
  constructor(public message: String) { }
}
