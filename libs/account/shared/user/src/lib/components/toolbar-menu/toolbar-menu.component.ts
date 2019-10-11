import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '@sws/api-interfaces';
import { AuthService } from '@sws/account/shared/auth';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'account-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss']
})
export class ToolbarMenuComponent implements OnInit {
  // @Input() user: IUser
  @Input() options
  user$: Observable<IUser>
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user$ = this.authService.info()
  }
  logout() {
    this.authService.logout()
  }
}
