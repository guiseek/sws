import { AsyncTableConfig } from '../interfaces/async-table-config.interface';

export const asyncTableConfig: AsyncTableConfig = {
  selectable: false,
  editable: false,
  deletable: false,
  clickable: false,
  paginator: {
    color: 'primary',
    hidePageSize: false,
    showFirstLastButtons: true,
    pageSize: 2
  }
}