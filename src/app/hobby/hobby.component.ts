import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Hobby } from './../hobby';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {

  @Input() hobbies: Hobby[];

  constructor() { }

  ngOnInit() {
  }

}
