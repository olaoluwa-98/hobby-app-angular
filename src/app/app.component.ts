import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'Hobby App';
  
  constructor() {}

  ngOnInit() {
  }
}
