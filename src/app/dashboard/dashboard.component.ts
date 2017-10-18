import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hobby } from './../hobby';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  @Input() hobbies: Hobby[];

  constructor() { }

  ngOnInit() {
  }

}
