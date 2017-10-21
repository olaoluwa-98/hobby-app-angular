import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hobby } from './../hobby';
import { NodeApiService } from './../node-api.service';
import { HobbyService } from './../hobby.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  public hobbies: Hobby[];
  
  constructor(
    private hobbyService: HobbyService
  ) { }

  ngOnInit() {
    this.hobbyService.getAllHobbies()
    .subscribe(hobbies => {
      this.hobbies = hobbies;
    });
    // console.log(this.hobbies);
  }
  
  handleEdit(hobbyId) 
  {
    this.hobbyService.editHobby(hobbyId).subscribe(x => {
        const index = this.hobbies.findIndex(hobby => hobby._id === hobbyId);
        // edit the hobby here
        // this.hobbies[index] = hobby;
      });
  }

  handleRemove(hobbyId) 
  {
    this.hobbyService.removeHobby(hobbyId)
      .subscribe(x => {
        const index = this.hobbies.findIndex(hobby => hobby._id === hobbyId);
        this.hobbies.splice(index, 1);
      });
  }
}
