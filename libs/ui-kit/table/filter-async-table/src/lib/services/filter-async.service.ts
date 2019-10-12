import { Injectable } from '@angular/core';
import {
  RequestQueryBuilder,
  CondOperator,
  QueryFilter,
  CreateQueryParams,
} from '@nestjsx/crud-request';
import { DialogService } from '@sws/ui-kit/floating/dialog';
import { FilterComponent } from '../components/filter/filter.component';
// import { IFilterProperty } from '@sws/api-interfaces';

@Injectable()
export class FilterAsyncService {
  public static select: any[]
  constructor(
    private dialogService: DialogService
  ) {
    console.log('select: ', FilterAsyncService.select)
  }

  createFilter(params: CreateQueryParams) {
    const request = RequestQueryBuilder.create()
  }
  openFilter<T = any>(fields) {
    return this.dialogService.open<T>(
      FilterComponent, {
        data: { fields }
      }
    )
  }
}
