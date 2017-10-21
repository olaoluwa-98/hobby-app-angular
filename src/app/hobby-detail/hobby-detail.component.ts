import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

// import { NodeApiService } from './../node-api.service';
import { HobbyService } from './../hobby.service';
import { Hobby } from './../hobby';

@Component({
  selector: 'app-hobby-detail',
  templateUrl: './hobby-detail.component.html',
  styleUrls: ['./hobby-detail.component.css']
})
export class HobbyDetailComponent implements OnInit {

  public hobbyId: string;
  public hobby: Hobby;
  constructor(
    private hobbyService: HobbyService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.hobbyService.getHobby(+params['id']))
    .subscribe(hobby => this.hobby = hobby);
    console.log(this.hobby);
  }

}
