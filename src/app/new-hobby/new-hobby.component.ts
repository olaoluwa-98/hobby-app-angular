import { Component, OnInit } from '@angular/core';
import { Hobby } from './../hobby';
import { NodeApiService } from './../node-api.service';
import { HobbyService } from './../hobby.service';

@Component({
  selector: 'app-new-hobby',
  templateUrl: './new-hobby.component.html',
  styleUrls: ['./new-hobby.component.css']
})
export class NewHobbyComponent implements OnInit {

  // public hobby: Hobby;
  hobby = {
    title: '',
    body: '',
  }
  public added: boolean;

  constructor(
    private hobbyService: HobbyService
  ) { }

  ngOnInit() {
  }

  submitNew()
  {
    // filter input
    this.hobby.title.trim();
    this.hobby.body.trim();

    this.hobbyService.addHobby(this.hobby).subscribe();
    this.added = true;
    this.hobby = {
      title: "",
      body: ""
    };
  }
}
