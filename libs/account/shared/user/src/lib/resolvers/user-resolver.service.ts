import { Injectable } from '@angular/core';
import { AuthService } from '@sws/account/shared/auth';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IUser } from '@sws/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<IUser> {
  constructor(
    private authService: AuthService
  ) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IUser> {
    return this.authService.info()
  }
}
