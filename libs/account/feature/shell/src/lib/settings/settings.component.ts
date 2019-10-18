import { Component, OnInit } from '@angular/core';
import { UserService } from '@sws/account/shared/user';
import { IUser } from '@sws/api-interfaces';
import { AuthService } from '@sws/account/shared/auth';

@Component({
  selector: 'sws-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  user: IUser
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.user = this.authService.user
  }
}
