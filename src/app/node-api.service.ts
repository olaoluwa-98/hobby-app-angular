import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class NodeApiService {

  private apiBaseUrl: String = 'http://localhost:3000/api/';

  constructor(
    private http: Http
  ) { }

  get (url) : Observable<any> {
    return this.http.get(`${this.apiBaseUrl}${url}`);
  }
  
  post (url, data) : Observable<any> {
    return this.http.post(`${this.apiBaseUrl}${url}`, data);
  }

  put (url, data) : Observable<any> {
    return this.http.put(`${this.apiBaseUrl}${url}`, data);
  }

  delete (url, id) : Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}${url}/${id}`);
  }
}
