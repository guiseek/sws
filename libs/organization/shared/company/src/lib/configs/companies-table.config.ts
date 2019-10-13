import { AsyncTableConfig, AsyncTableBehavior, AsyncTableResource, asyncTableConfig, asyncTableBehavior } from '@sws/ui-kit/table/async-table'

// import { AsyncTableResource, AsyncTableConfig, AsyncTableBehavior } from '../../../../../../ui-kit/table/async-table/src/lib/interfaces';

export const companiesTable = (
  config?: AsyncTableConfig,
  behavior?: AsyncTableBehavior
): AsyncTableResource => {
  return {
    meta: {
      endpoint: `/api/companies`,
      columns: [
        { columnDef: 'name', header: 'Nome', cell: (element) => element.name },
        { columnDef: 'domain', header: 'Domínio', cell: (element) => element.domain }
      ]
    },
    config: Object.assign(
      {}, asyncTableConfig, config
    ),
    behavior: Object.assign(
      {}, asyncTableBehavior, behavior
    )
  }
}