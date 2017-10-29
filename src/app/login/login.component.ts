import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  

  public error;
  public user_login = {
    username: '',
    password: ''
  }
  constructor(
    private auth_service: AuthService, private router: Router
  ) {}

  ngOnInit() {
    if (window.localStorage.getItem('auth_key'))
      this.router.navigate(['dashboard']);
  }

  login()
  {
    this.auth_service.login(this.user_login)
      .map(response => response.json())
      .subscribe( data => {
          window.localStorage.setItem('auth_key', data.token);
          this.router.navigate(['dashboard']);
      },
      error => {
        if(error.status == 0)
          this.error = 'Server is offline bro';
        else
          this.error = JSON.parse(error._body).message;
      }
      );
  }
}