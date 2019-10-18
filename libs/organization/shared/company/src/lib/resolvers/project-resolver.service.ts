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
    console.table(route.parent.params)
    const companyId = route.parent.params['id']
    const projectId = route.params['id']
    return this.service.getOne(companyId, projectId)
  }
}
