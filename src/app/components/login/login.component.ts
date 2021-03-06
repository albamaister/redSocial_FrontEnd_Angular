import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public user: User;
  public status: string;
  public identity;
  public token;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.user = new User( '', '', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit() {
  }
  onSubmit() {
    // console.log(this.user);
    this._userService.signUp(this.user).subscribe(
      response => {
        this.identity = response.user;
        console.log(this.identity);
        if ( !this.identity && !this.identity._id ) {
          this.status = 'error';
        } else {
          this.status = 'success';
          // Persistir datos de usuario
          localStorage.setItem('identity', JSON.stringify(this.identity));
          // Conseguir el token
          this.getToken();

        }
      },
      error => {
        const errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = 'error';
        }

      }
    );
  }

  getToken() {
    this._userService.signUp(this.user, 'true').subscribe(
      response => {
        this.token = response.token;
        console.log(this.token);
        if ( this.token.length <= 0 ) {
          this.status = 'error';
        } else {
          this.status = 'success';
          // Persistir token de usuario
          localStorage.setItem('token', JSON.stringify(this.token));

          // Conseguir los contadores o estadisticas del user

        }
      },
      error => {
        const errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = 'error';
        }

      }
    );
  }

}
