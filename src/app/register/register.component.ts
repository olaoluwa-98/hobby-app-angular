import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user_details = {
    email: '',
    username: '',
    first_name: '',
    last_name: '',
    phone_no: '',
    password: ''
  }
  public errors;
  public errors_2;

  constructor(
    private auth_service: AuthService, private router: Router
  ) {}

  ngOnInit() {
    if (window.localStorage.getItem('auth_key'))
    {
      this.router.navigate(['dashboard']);
    }
  }

  registerUser()
  {
    this.auth_service.register(this.user_details)
    .map(response => response.json())
    .subscribe(  data => {
      window.localStorage.setItem('auth_key', data.token);;
      this.router.navigate(['dashboard']);
      },
      error => {
        if(error.status === 0)
        {
          this.errors = ['Server is offline bro'];
        }
        else if (JSON.parse(error._body).type === 2)
        {
          this.errors_2 = JSON.parse(error._body).errors;
          this.errors = null;
        }
        else
        {
          this.errors = JSON.parse(error._body).errors;
          this.errors_2 = null;
        }
      }
    );
  }
}
