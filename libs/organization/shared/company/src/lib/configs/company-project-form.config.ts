import { FormElement } from '@sws/ui-kit/form/builder';

export const companyProjectForm = (
  companyId: number,
  // config: AsyncTableConfig = asyncTableConfig,
  // behavior: AsyncTableBehavior = asyncTableBehavior
): FormElement[] => {
  return [
    {
      label: 'Nome',
      type: 'input',
      name: 'name',
      validators: 'required'
    },
    {
      label: 'Domínio',
      type: 'input',
      name: 'domain',
      validators: 'required'
    },
    {
      label: 'Descrição',
      type: 'textarea',
      name: 'description'
    }
  ]
  // return {
  //   meta: {
  //     endpoint: `/api/companies/${companyId}/projects`,
  //     columns: [
  //       { columnDef: 'name', header: 'Nome', cell: (element) => element.name },
  //       { columnDef: 'description', header: 'Descrição', cell: (element) => element.description },
  //       { columnDef: 'isActive', header: 'Ativo', cell: (element) => element.isActive },
  //       { columnDef: 'users', header: 'Membros', cell: (element) => `${element.users.length} usuários` }
  //     ]
  //   },
  //   config: Object.assign(
  //     {}, asyncTableConfig, config
  //   ),
  //   behavior: Object.assign(
  //     {}, asyncTableBehavior, behavior
  //   )
}