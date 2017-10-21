import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {
  isLoggedin = true;

  public login_url = 'http://localhost:3000/api/login';


  constructor(
    private _http:Http
  ) { }


  loginfn(user_creds)
  {
    this.isLoggedin = false;
    var headers = new Headers();
    var creds = 'username=' + user_creds.username + '&password=' + user_creds.password;
    headers.append('Content-Type', 'application/x-www-form-urlencoded');


    return new Promise((resolve) => {
      this._http.post(this.login_url, creds, {headers: headers})
      .subscribe(data => {
        if(data.json().success)
        {
          window.localStorage.setItem('auth_key', data.json().token);
          this.isLoggedin = true;
          resolve(this.isLoggedin)
        }
      });
    })    
  }
}
