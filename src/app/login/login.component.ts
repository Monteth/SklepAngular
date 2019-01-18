import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'xd';
  password = '123456';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router) { }


  ngOnInit() {
  }

  handlerLogin() {
    console.log(this.username);
    this.invalidLogin = !(this.username === 'monteth' && this.password === '123');
    if (!this.invalidLogin) {
      this.router.navigate(['welcome', this.username]);
    }
  }
}
