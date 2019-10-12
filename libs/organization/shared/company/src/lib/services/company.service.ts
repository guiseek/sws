import { Injectable } from '@angular/core';
import { HttpService } from '@sws/shared/utils';
import { ICompany, IProject } from '@sws/api-interfaces';
import { HttpParams } from '@angular/common/http';
import { RequestQueryBuilder } from '@nestjsx/crud-request';

@Injectable()
export class CompanyService {
  private api = '/api/companies';
  constructor(
    private httpService: HttpService
  ) {}
  getMany() {
    return this.httpService.get<ICompany[]>('/api/companies')
  }
  getOne(id: number) {
    return this.httpService.get<ICompany>(`/api/companies/${id}`)
  }
  createOne(company: ICompany) {
    return this.httpService.post('/api/companies', company)
  }
  updateOne(company: Partial<ICompany>) {
    return this.httpService.put(`/api/companies/${company.id}`, company)
  }
  deleteOne(id: number) {
    return this.httpService.delete(`/api/companies/${id}`)
  }
  addCompany(companyId: number, company: Partial<ICompany>) {
    return this.httpService.put(`/api/companies/${companyId}`, { company })
  }

  /**
   * Old
   */
  getCompanies() {
    return this.httpService.read<ICompany>(this.api);
  }
  findCompanyById(companyId: number) {
    return this.httpService.findOne<ICompany>(this.api, companyId);
    // return this.http.get<ICompany>(`/api/companys/${companyId}`);
  }

  findAllCompanies() {
    return this.httpService.get(this.api);
    // .pipe(
    //   map(res => res['payload'])
    // );
  }

  findAllCompanyProjects(companyId: number) {
    return this.httpService.read<IProject>(
      `${this.api}/${companyId}/projects`,
      {
        page: 1,
        limit: 1
      }
    );
    // return this.httpService.get('/api/lessons', {
    //   params: new HttpParams()
    //     .set('companyId', companyId.toString())
    //     .set('pageNumber', "0")
    //     .set('pageSize', "1000")
    // }).pipe(
    //   map(res => res["payload"])
    // );
  }

  findProjects(
    companyId: number,
    filter = '',
    sortOrder = 'asc',
    pageNumber = 0,
    pageSize = 3
  ) {
    const query = RequestQueryBuilder.create();
    query.setFilter({
      field: 'name',
      operator: 'cont',
      value: filter
    });
    // query.sortBy({
    //   field
    // })
    return this.httpService.get<IProject[]>(
      `${this.api}/${companyId}/projects`,
      {
        params: new HttpParams()
          .set('filter', query.query())
          .set('order', sortOrder)
          .set('page', pageNumber.toString())
          .set('per_page', pageSize.toString())
      }
    );
    // return this.httpService.get('/api/lessons', {
    //   params: new HttpParams()
    //     .set('companyId', companyId.toString())
    //     .set('filter', filter)
    //     .set('sortOrder', sortOrder)
    //     .set('pageNumber', pageNumber.toString())
    //     .set('pageSize', pageSize.toString())
    // }).pipe(
    //   map(res => res["payload"])
    // );
  }
}
