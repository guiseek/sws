import { CondOperator, QueryFilter } from '@nestjsx/crud-request';

export interface FilterCondition {
  operator: CondOperator
  label: string
}
export type SwsQueryFilter = {
  [P in keyof QueryFilter]: QueryFilter[P]
} & {
  view: {
    field: string,
    operator: string
  }
}
export interface AsyncQueryFilter {
  value: QueryFilter
  viewValue: {
    operator: string
    field: string
  }
}