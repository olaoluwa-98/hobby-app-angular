import { Component, OnInit, Input, Output, EventEmitter, trigger, state, style, transition, animate } from '@angular/core';
import { Hobby } from './../hobby';
import { User } from './../user';
import { HobbyService } from './../hobby.service';
import { AuthService } from './../auth.service';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  public hobbies: Hobby[];
  public fav_hobby: Hobby;
  public user: User;
  public errors;
  public last_change;
  public message;

  constructor(
    private hobbyService: HobbyService, private authService: AuthService, private router: Router
  ) {}

  ngOnInit() {
    this.authService.get_user()
    .map(response => response.json())
    .subscribe(data => {
      this.user = data.user;
    },
    error => {
      if(error.status == 0)
        this.errors = 'Server is offline bro';
      else
        this.errors = JSON.parse(error._body).message;
    }
    );

    this.hobbyService.getAllHobbies()
    .subscribe(data => {
      const index = data.hobbies.findIndex(hobby => hobby.favorite === true);
      if(index != -1)
      {
        this.fav_hobby = data.hobbies[index];
        data.hobbies.splice(index, 1);
      }
      this.hobbies = data.hobbies.slice(0, 3);
      if (this.hobbies.length >= 1) this.last_change = this.hobbies[this.hobbies.length - 1].updated_at;
    },
      error => {
        if(error.status == 0)
          this.errors = 'Server is offline bro';
        else
          this.errors = JSON.parse(error._body).message;
      }
  );
  }
  
  handleEdit(hobbyId) 
  {
    this.hobbyService.editHobby({ 'hobby_id': hobbyId})
    .subscribe(data => {
        const index = this.hobbies.findIndex(hobby => hobby._id === hobbyId);
        this.hobbies[index] = data;
      },
      error => {
        this.errors = JSON.parse(error._body).message;
      }
    );
  }

  favorite(hobbyId)
  {
    const index = this.hobbies.findIndex(hobby => hobby._id === hobbyId);
    this.hobbyService.favHobby({ 'hobby_id': hobbyId})
    .subscribe(data => {
      this.message = data.message;
      this.hobbies.splice(index, 1);
      if (this.fav_hobby) this.hobbies.push(this.fav_hobby);
      this.fav_hobby = data.hobby;
      if (this.hobbies.length == 0) this.hobbies = [];
    },
    error => {
      if(error.status == 0)
        this.errors = 'Server is offline bro';
      else
        this.errors = JSON.parse(error._body).message;
    }
  );  
  }

  unfavorite(hobbyId)
  {
    this.hobbyService.unfavHobby({ 'hobby_id': hobbyId})
    .subscribe(data => {
      this.message = data.message;
      if (this.fav_hobby) this.hobbies.push(this.fav_hobby);
      delete this.fav_hobby;
    },
    error => {
      if(error.status == 0)
        this.errors = 'Server is offline bro';
      else
        this.errors = JSON.parse(error._body).message;
    }
  );  
  }

  handleRemove(hobbyId) 
  {
    const index = this.hobbies.findIndex(hobby => hobby._id === hobbyId);
    this.hobbyService.removeHobby(hobbyId)
      .subscribe(data => {
        if (index != -1) this.hobbies.splice(index, 1);
        else if (hobbyId == this.fav_hobby._id) delete this.fav_hobby;
      },
      error => {
        if(error.status == 0)
          this.errors = 'Server is offline bro';
        else
          this.errors = JSON.parse(error._body).message;
      }
    );
  }
}
