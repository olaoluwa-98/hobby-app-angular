import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Hobby } from './../hobby';
import { NodeApiService } from './../node-api.service';
import { HobbyService } from './../hobby.service';
import { AuthService } from './../auth.service';
import { User } from './../user';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-hobby',
  templateUrl: './new-hobby.component.html',
  styleUrls: ['./new-hobby.component.css']
  // animations: [
  //   trigger('successState', [
  //     state('true', style({
  //       opacity: 1,
  //       transform: 'scale(1)'
  //     })),
  //     state('false', style({
  //       opacity: 0,
  //       transform: 'scale(0.5)'
  //     })),
  //     transition('false => true', animate('1000ms ease-in')),
  //     transition('true => false', animate('500ms ease-out'))
  //   ])
  // ]
})
export class NewHobbyComponent implements OnInit {
  public hobby = {
      title: '',
      body: '',
    }
  public user: User;
  public errors;
  public errors_2;
  public error;
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
      if(error.status == 0)
      {
        this.errors = [{msg: 'Server is offline bro'}];
        this.error = 'Server is offline bro';
      }        
      else
      {
        this.errors = JSON.parse(error._body).message;
      }        
    }
  );
  }

  submitNew(form: FormGroup)
  {
    this.hobby.title.trim();
    this.hobby.body.trim();
    this.hobbyService.addHobby(this.hobby)
    .subscribe( data => {
        this.success.message = data.message;
        this.errors = null;
        form.reset();
      },
      error => {
        if(error.type === 2)
        {
          this.errors_2 = JSON.parse(error._body);
          this.errors = null;
          form.reset();
        }
        else if (error.status === 0)
        {
          this.errors = [{msg: 'Server is offline bro'}];
          this.errors_2 = null;
        }
        else
        {
          this.errors = JSON.parse(error._body).errors;
          this.errors_2 = null;
        }
      }
  );
  } 
}
