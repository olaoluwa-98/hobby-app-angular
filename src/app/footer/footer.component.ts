import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public notLogged = true;
  public Logged = false;
  constructor() { }

  ngOnInit() {
    if (window.localStorage.getItem('auth_key'))
    {
      this.notLogged = false;
      this.Logged = true;
    }
      
  }

}
