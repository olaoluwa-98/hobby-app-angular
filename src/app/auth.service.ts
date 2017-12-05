import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

  constructor(
    private _http:Http
  ) { }

  login(data) : Observable<any>
  {
    return this._http.post('http://localhost:3000/login', data);
  }

  logout(data) : Observable<any>
  {
    return this._http.get('http://localhost:3000/logout/' + data);
  }

  register(data)
  {
    return this._http.post('http://localhost:3000/register', data);
  }

  // checkauth()
  // {
  //   return this._http.post('authenticate', window.localStorage.getItem('auth_key'));
  // }

  get_user()
  {
    let headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token' : window.localStorage.getItem('auth_key') });
    return this._http.get('http://localhost:3000/api/user', {headers: headers});
  }

  changepwd(data)
  {
    let headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token' : window.localStorage.getItem('auth_key') });
    return this._http.post('http://localhost:3000/api/change-password', data, {headers: headers});
  }
}
