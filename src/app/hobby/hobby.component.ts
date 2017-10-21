import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hobby } from './../hobby';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {

  @Input() hobbies: Hobby[];

  @Output() ed_hobby = new EventEmitter<string>();
  @Output() del_hobby = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  edit(val: string)
  {
    this.ed_hobby.emit(val);
  } 
  
  remove(val: string)
  {
    this.del_hobby.emit(val);
  }  
}
