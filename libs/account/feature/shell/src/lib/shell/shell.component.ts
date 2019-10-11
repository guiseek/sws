import { Component, OnInit } from '@angular/core';
import { AuthService, IJwtPayload } from '@sws/account/shared/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'sws-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  user$: Observable<IJwtPayload>
  iconHome = {
    icon: 'home',
    link: '/conta'
  }
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user$ = this.authService.me()
  }

}
