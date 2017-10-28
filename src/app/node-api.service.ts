import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class NodeApiService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  

  private apiBaseUrl: String = 'http://localhost:3000/api/';

  constructor(
    private http: Http
  ) {}

  setToken(token)
  {
    this.headers.append('x-access-token', token);
  }

  get (url) : Observable<any> {
    
    return this.http.get(`${this.apiBaseUrl}${url}`, {headers: this.headers});
  }
  
  post (url, data) : Observable<any> {
    return this.http.post(`${this.apiBaseUrl}${url}`, data, {headers: this.headers});
  }

  put (url, data) : Observable<any> {
    return this.http.put(`${this.apiBaseUrl}${url}`, data, {headers: this.headers});
  }

  delete (url, id) : Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}${url}/${id}`, {headers: this.headers});
  }
}
