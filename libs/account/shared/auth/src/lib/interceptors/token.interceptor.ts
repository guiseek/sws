import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    // @Inject(JWT_CONFIG_TOKEN) private _jwtConfig: IJwtConfig,
    private _tokenService: TokenService,
    private router: Router
  ) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this._tokenService.token
    if (token) request = this.getCloneRequestWithToken(request, token)

    return next.handle(request).pipe(
      catchError((err) => {
        this.catchRedirectError(err);
        return throwError(err)
      })
    )
  }
  getCloneRequestWithToken(request: HttpRequest<any>, token: string) {
    console.log('token: ', token)
    return request.clone({
      setHeaders: this._tokenService.header
    })
  }
  catchRedirectError(err: any): void {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 401) {
        this._tokenService.clear()
        this.router.navigateByUrl('/auth');
      }
    }
  }
}
