import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { IJwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
  ) { }

  login(data) {
    return this.http.post(
      '/api/auth/login', data
    ).pipe(
      catchError(({ error }) => throwError(error)),
      tap(response => this.tokenService.setToken(response))
    )
  }
  me() {
    return this.http.get<IJwtPayload>(
      '/api/auth/me'
    )
  }
}
