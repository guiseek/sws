import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { ICompany } from '@sws/api-interfaces';
import { CompanyService } from '../services/company.service';
import { Observable } from 'rxjs';

@Injectable()
export class CompanyResolverService implements Resolve<ICompany> {
  constructor(private service: CompanyService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ICompany> {
    return this.service.getOne(route.params['id']);
  }
}
