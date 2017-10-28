import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    if (window.localStorage.getItem('auth_key'))
    {
      this.router.navigate(['dashboard']);
    }
  }

}
