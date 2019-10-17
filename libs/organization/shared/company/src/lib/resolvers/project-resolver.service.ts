import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { IProject } from '@sws/api-interfaces';
import { ProjectService } from '../services/project.service';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectResolverService implements Resolve<IProject> {
  constructor(private service: ProjectService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IProject> {
    return this.service.getOne(route.params['id']);
  }
}
