import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, DoCheck {
  title = 'NG SOCIAL';
  public identity;
  constructor(
    private _userService: UserService,
  ) {

  }
  ngOnInit() {
    this.identity = this._userService.getIdentity();
    console.log(this.identity);
  }
  ngDoCheck() {
    this.identity = this._userService.getIdentity();
  }
}
