import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user_login = {
    username: '',
    password: ''
  }
  constructor(
    private auth_service:AuthService, private router:Router
  ) { }

  ngOnInit() {
  }

  login()
  {
    this.auth_service.loginfn(this.user_login).then( (res) =>{
      if(res)
        this.router.navigate(['dashboard']);
      else
        console.log(res);
    })
  }

  clearfields()
  {
    this.user_login = {
      username: '',
      password: ''
    }
  }

}
