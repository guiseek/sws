import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { USER_REQUEST_KEY } from '../config/constants';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    // private authService: AuthService
  ) { }

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const req = ctx.switchToHttp().getRequest();
    // req[USER_REQUEST_KEY] = await this.authService.getUser(1);
    console.log(USER_REQUEST_KEY)
    console.log(req['user'])
    return true;
  }
}
