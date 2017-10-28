import { Component, OnInit } from '@angular/core';
import {  trigger, state, style, animate, transition } from '@angular/animations';
import { Hobby } from './../hobby';
import { NodeApiService } from './../node-api.service';
import { HobbyService } from './../hobby.service';
import { AuthService } from './../auth.service';
import { User } from './../user';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-hobby',
  templateUrl: './new-hobby.component.html',
  styleUrls: ['./new-hobby.component.css'],
  animations: [
    trigger('success', [
      state('true', style({
        display: 'none',
        transform: 'scale(1)'
      })),
      state('false', style({
        display: 'block',
        transform: 'scale(0.5)'
      })),
      transition('false => true', animate('100ms ease-in')),
      transition('true => false', animate('100ms ease-out'))
    ])
  ]
})
export class NewHobbyComponent implements OnInit {
  public hobby = {
      title: '',
      body: '',
    }
  public user: User;
  public errors;
  public success = {
    state: 'false',
    message: ''
  };

  constructor(
    private hobbyService: HobbyService, private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.get_user()
    .map(response => response.json())
    .subscribe(data => {
      this.user = data.user;
    },
    error => {
      this.errors = JSON.parse(error._body).message;
    }
  );
  }

  animateMe()
  {
    this.success.state =(this.success.state === 'false' ? 'true': 'false');
    console.log(this.success);
  }

  submitNew(form: FormGroup)
  {
    // filter input
    this.hobby.title.trim();
    this.hobby.body.trim();
    this.hobbyService.addHobby(this.hobby)
    .subscribe( data => {
        this.hobby = {
          title: "",
          body: "",
        };
        this.success.message = data.message;
        this.success.state = 'active';
        form.reset();
      },
      error => {
        this.errors = JSON.parse(error._body).message;
      }
  );
  } 
}
