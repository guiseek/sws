import { Component } from '@angular/core';

@Component({
  selector: 'sws-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  // user$: Observable<IJwtPayload>
  // user: Observable<IUser>
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
  // constructor(private authService: AuthService) { }
}
