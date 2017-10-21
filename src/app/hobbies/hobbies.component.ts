import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hobby } from './../hobby';
import { NodeApiService } from './../node-api.service';
import { HobbyService } from './../hobby.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  public hobbies: Hobby[];

  constructor(
    private hobbyService: HobbyService
  ) { }

  ngOnInit() {
    this.hobbyService.getAllHobbies()
    .subscribe(hobbies => {
      this.hobbies = hobbies;
    });
  }
}
