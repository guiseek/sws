import { Subject } from 'rxjs';

export interface AsyncTableColumn {
  columnDef: string
  header: string
  cell: (element: any) => string,
  format?: string
}

export interface AsyncTableMetadata {
  endpoint: string
  columns: AsyncTableColumn[]
  refresh?: Subject<boolean>
}