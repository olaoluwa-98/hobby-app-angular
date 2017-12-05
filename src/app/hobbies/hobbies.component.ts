import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hobby } from './../hobby';
import { User } from './../user';
import { NodeApiService } from './../node-api.service';
import { HobbyService } from './../hobby.service';
import { AuthService } from './../auth.service';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  public hobbies: Hobby[];
  public fav_hobby: Hobby;
  public user: User;
  public last_change;
  public errors;
  public message;

  constructor(
    private hobbyService: HobbyService, private authService: AuthService, private router: Router
  ) { }

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
      this.hobbies = data.hobbies;
      if (data.hobbies.length >= 1)
      {
        this.last_change = this.hobbies[this.hobbies.length - 1].updated_at;
      }      
    });    
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
