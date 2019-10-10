import { HttpClient } from '@angular/common/http';
import { RequestQueryBuilder, CondOperator, QueryFilter, CreateQueryParams } from '@nestjsx/crud-request';

export class HttpService extends HttpClient {
  protected findOne<T>(url: string, id: number) {
    return this.read<T>(`${ url }/${ id }`)
  }
  protected read<T>(url: string, query?: CreateQueryParams) {
    const params = RequestQueryBuilder.create(query)
    return this.get<T[]>(`${ url }?${ params.query() }`)
  }
}