import { Injectable, Inject } from '@angular/core';
import { JWT_CONFIG_TOKEN } from '../configs/jwt.config';
import { IJwtConfig } from '../interfaces/jwt-config.interface';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(@Inject(JWT_CONFIG_TOKEN) private _jwtConfig: IJwtConfig) {}
  public set token(value: string) {
    window.localStorage.setItem(this._jwtConfig.storage, value);
  }
  setToken(value: Object) {
    this.token = value[this._jwtConfig.token];
  }
  public get token(): string {
    return window.localStorage.getItem(this._jwtConfig.storage);
  }
  public get header() {
    const headers = {};
    headers[this._jwtConfig.header] = `
      ${this._jwtConfig.prefix} ${this.token}
    `;
    return headers;
  }
  clear(): void {
    window.localStorage.removeItem(this._jwtConfig.storage);
  }
  currentPayload() {
    return jwt_decode(
      this.token
    )
  }
  payload(token: string) {
    // return payload
    return jwt_decode(token);
  }
}
