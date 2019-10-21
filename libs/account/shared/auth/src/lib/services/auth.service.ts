import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, filter } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { IJwtPayload } from '../interfaces/jwt-payload.interface';
import { IUser } from '@sws/api-interfaces';

@Injectable()
export class AuthService {
  private _user = new BehaviorSubject<IUser>(null)
  public user$ = this._user.asObservable()
  public user: IUser
  constructor(
    private tokenService: TokenService,
    private http: HttpClient
  ) {}

  login(data) {
    return this.http.post('/api/auth/login', data).pipe(
      catchError(({ error }) => throwError(error)),
      tap(response => this.tokenService.setToken(response))
    )
  }
  signup(data) {
    return this.http.post('/api/users', data).pipe(
      catchError(({ error }) => throwError(error)),
      tap(response => this.tokenService.setToken(response))
    )
  }
  forgotPassword(data) {
    return this.http.post('/api/auth/forgot-password', data)
  }
  resetPassword(data) {
    return this.http.post('/api/auth/reset-password', data)
  }
  me() {
    return this.http.get<IJwtPayload>('/api/auth/me');
  }
  info() {
    return this.http.get<IUser>('/api/auth/info')
      .pipe(
        // filter(u => !!u),
        tap(user => this._user.next(user)),
        tap((user) => this.user = user)
      )
  }
  get payload() {
    return this.tokenService.currentPayload()
  }
  logout() {
    this.tokenService.clear()
    return this.me().toPromise()
  }
}
