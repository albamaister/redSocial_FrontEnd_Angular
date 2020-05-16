import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  public user: User;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
      this.user = new User( '', '', '', '', '', '', 'ROLE_USER', '');
    }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
  }

}
