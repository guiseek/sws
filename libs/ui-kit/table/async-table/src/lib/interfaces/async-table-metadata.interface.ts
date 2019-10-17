import { Subject } from 'rxjs';

export interface AsyncTableColumn {
  columnDef: string
  header: string
  cell: (element: any) => string,
  format?: string,
  cellClass?: string | string[],
  cellState?: (element: any) => string
}

export interface AsyncTableMetadata {
  endpoint: string
  columns: AsyncTableColumn[]
  refresh?: Subject<boolean>
}