import { Component, OnInit } from '@angular/core';
import { HttpService } from '@sws/shared/utils';
import { Observable } from 'rxjs';
import { IUser } from '@sws/api-interfaces';
import { AuthService } from '@sws/account/shared/auth';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sws-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  providers: [HttpService]
})
export class OverviewComponent implements OnInit {
  users$: Observable<any[]>;
  user$: Observable<IUser>
  props = {
    'name.first': 'Nome',
    'name.last': 'Sobrenome'
  }
  constructor(
    private service: HttpService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.users$ = this.service.read('/api/users');
    this.user$ = this.authService.user$.pipe(
      map(
        (user) => {
          console.log('u: ', user)
          return user
        }
      )
    )
  }
}
