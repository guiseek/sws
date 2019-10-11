import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { IJwtPayload } from '../interfaces/jwt-payload.interface';
import { IUser } from '@sws/api-interfaces';

@Injectable()
export class AuthService {
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
  me() {
    return this.http.get<IJwtPayload>('/api/auth/me');
  }
  info() {
    return this.http.get<IUser>('/api/auth/info');
  }
  get payload() {
    return this.tokenService.currentPayload()
  }
  logout() {
    this.tokenService.clear()
    return this.me().toPromise()
  }
}
