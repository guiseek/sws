import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { getFeature, getAction } from '@nestjsx/crud';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    // return true;
    const handler = context.getHandler();
    const controller = context.getClass();

    const request = context.switchToHttp().getRequest()
    console.log(request.user)
    const feature = getFeature(controller);
    const action = getAction(handler);

    console.log(`${feature}-${action}`); // e.g. 'Heroes-Read-All'

    return true;
  }
}
