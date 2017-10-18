import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Observable } from "rxjs";
import { NodeApiService } from './node-api.service';
import { HobbyService } from './hobby.service';

import { Hobby } from './hobby';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'Hobby App';
  public hobbies: Hobby[];
  
  constructor(
    private hobbyService: HobbyService
  ) {}

  ngOnInit() {
    this.hobbyService.getAllHobbies()
      .subscribe(hobbies => {
        this.hobbies = hobbies;
      });

    // this.dsService.client.event.subscribe('new-comment', (comment) => {
    //   this.hobbies.unshift(comment);
    // })
  }

  handleNewComment(hobby) {
    this.hobbyService.addHobby(hobby)
      .subscribe(hobbies => {
        this.hobbies.unshift(hobby);
        // this.dsService.client.event.emit('new-hobby', hobby)
      })
  }

  handleRemove(hobbyId) {
    this.hobbyService.removeHobby(hobbyId)
      .subscribe(x => {
        const index = this.hobbies.findIndex(hobby => hobby.id === hobbyId);
        this.hobbies.splice(index, 1);
      })
  }
}
