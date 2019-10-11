import { HttpClient } from '@angular/common/http';
import {
  RequestQueryBuilder,
  CondOperator,
  QueryFilter,
  CreateQueryParams
} from '@nestjsx/crud-request';
import { Observable } from 'rxjs';

export class HttpService extends HttpClient {
  public findOne<T>(url: string, id: number) {
    return this.get<T>(`${url}/${id}`);
  }
  public read<T>(url: string, query?: CreateQueryParams) {
    const params = RequestQueryBuilder.create(query);
    return this.get<T[]>(`${url}?${params.query()}`);
  }
}
