import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth_service: AuthService, private router: Router
  ) { }

  ngOnInit() {
  }

  logout()
  {
    window.localStorage.clear();
    document.location.reload();
  }
}