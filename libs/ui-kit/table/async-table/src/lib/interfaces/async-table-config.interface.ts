export interface AsyncTableConfig {
  selectable?: boolean
  editable?: boolean
  deletable?: boolean
  clickable?: boolean
  paginator?: {
    color?: string
    hidePageSize?: boolean
    showFirstLastButtons?: boolean
    pageSize?: number
  }
}