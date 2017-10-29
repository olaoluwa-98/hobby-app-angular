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
}
