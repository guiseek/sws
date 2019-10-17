import { AsyncTableConfig } from '../interfaces/async-table-config.interface';
import { AsyncTableBehavior } from '../interfaces';
import { Subject, BehaviorSubject } from 'rxjs';
import { QueryFilter } from '@nestjsx/crud-request';

export const asyncTableConfig: AsyncTableConfig = {
  selectable: false,
  editable: false,
  deletable: false,
  clickable: false,
  paginator: {
    color: 'primary',
    hidePageSize: false,
    showFirstLastButtons: true,
    pageSize: 10
  }
}

export const asyncTableBehavior: AsyncTableBehavior = {
  filters: new BehaviorSubject<QueryFilter[]>([]),
  refresh: new Subject,
  // rowClicked: new BehaviorSubject(null)
}