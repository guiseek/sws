import { AsyncTableResource, asyncTableConfig, AsyncTableConfig, AsyncTableBehavior, asyncTableBehavior } from '@sws/ui-kit/table/async-table';
import { IProject } from '@sws/api-interfaces';

export const companyProjectsTable = (
  companyId: number,
  config = asyncTableConfig,
  behavior = asyncTableBehavior
): AsyncTableResource<IProject> => {
  return {
    meta: {
      endpoint: `/api/companies/${companyId}/projects`,
      columns: [
        { columnDef: 'name', header: 'Nome', cell: (element) => element.name },
        { columnDef: 'description', header: 'Descrição', cell: (element) => element.description },
        { columnDef: 'isActive', header: 'Ativo', cell: (element) => element.isActive ? 'Sim' : 'Não' },
        { columnDef: 'users', header: 'Membros', cell: (element) => `${element.users.length} usuários` }
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