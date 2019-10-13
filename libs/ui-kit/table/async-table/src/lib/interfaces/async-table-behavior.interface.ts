import { Subject, BehaviorSubject } from 'rxjs';
import { QueryFilter } from '@nestjsx/crud-request';

export interface AsyncTableBehavior {
  refresh?: Subject<boolean>
  filters?: BehaviorSubject<QueryFilter[]>
}