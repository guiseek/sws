import { Component, OnInit } from '@angular/core';
import { AuthService, IJwtPayload } from '@sws/account/shared/auth';
import { Observable } from 'rxjs';
import { IUser } from '@sws/api-interfaces';

@Component({
  selector: 'sws-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  user$: Observable<IJwtPayload>
  user: Observable<IUser>
  iconHome = {
    icon: 'home',
    link: '/conta'
  };
  navLinks = [{
    path: 'geral',
    label: 'Geral'
  }, {
    path: 'perfil',
    label: 'Perfil'
  }, {
    path: 'configuracoes',
    label: 'Configurações'
  }]
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user$ = this.authService.me()
    // this.authService.user$.subscribe(console.table)
    this.user = this.authService.user$
    console.log('auth user: ', this.authService.user)
  }
  logout() {
    this.authService.logout()
  }
}
