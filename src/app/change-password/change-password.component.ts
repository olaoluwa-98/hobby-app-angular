import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public error;
  public success;
  public old_password;
  public new_password;
  public new_password2;

  constructor(
    private auth_service: AuthService, private router: Router
  ) { }

  ngOnInit() {
  }

  changepwd()
  {
    if (this.new_password == this.new_password2)
    {
      if (this.new_password.length < 8 || this.new_password2.length < 8 )
      {
        this.error = 'Passwords must be 8 characters or longer';
      }
      else
      {
        this.auth_service.changepwd({ 'old_password': this.old_password, 'new_password':this.new_password})
        .map(response => response.json())
        .subscribe( data => {
          this.success = data.message;
          this.error = null;
          this.old_password = null;
          this.new_password = null;
          this.new_password2 = null;
        },
        error => {
          if(error.status == 0)
            this.error = 'Server is offline bro';
          else
            this.error = JSON.parse(error._body).message;
        }
        );
      }      
    }
    else
    {
      this.error = 'Passwords must be the same';
    }
  }

}