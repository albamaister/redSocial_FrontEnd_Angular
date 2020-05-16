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
        console.log(response.user);
        this.status = 'success';
      },
      error => {
        const errorMessage = <any>error;
        console.log('errorMessage');
        if (errorMessage != null) {
          this.status = 'error';
        } 

      }
    );
  }

}
