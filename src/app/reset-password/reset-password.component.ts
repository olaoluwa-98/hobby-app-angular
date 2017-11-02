import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public email;
  public error;
  public success;

  constructor(
    private auth_service: AuthService, private router: Router
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem('auth_key'))
    this.router.navigate(['dashboard']);
  }

  resetpwd()
  {
    this.auth_service.reset_password(this.email)
    .map(response => response.json())
    .subscribe( data => {
      this.error = JSON.parse(error._body).message;
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
