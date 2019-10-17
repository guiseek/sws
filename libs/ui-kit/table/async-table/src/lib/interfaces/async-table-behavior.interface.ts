import { Subject, BehaviorSubject } from 'rxjs';
import { QueryFilter } from '@nestjsx/crud-request';

export interface AsyncTableBehavior<T = any> {
  refresh?: Subject<boolean>
  filters?: BehaviorSubject<QueryFilter[]>
  rowClicked?: BehaviorSubject<T>
}