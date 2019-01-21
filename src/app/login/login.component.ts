import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BasicAuthenticationService} from '../service/basic-authentication.service'
import {PatronService} from '../service/data/patron.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  private email: string
  private password: string

  constructor(private router: Router,
              private patronService: PatronService
              // private basicAuthenticationService: BasicAuthenticationService
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    sessionStorage.setItem('email', this.email);
    this.router.navigate(['welcome', this.email])
    this.invalidLogin = false
    console.log('Zalogowano ' + this.email)
    // // console.log(this.username);
    // // if(this.username==="in28minutes" && this.password === 'dummy') {
    // this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
    //   .subscribe(
    //     data => {
    //       console.log(data)
    //       this.router.navigate(['welcome', this.username])
    //       this.invalidLogin = false
    //     },
    //     error => {
    //       console.log(error)
    //       this.invalidLogin = true
    //     }
    //   )
  }
}
