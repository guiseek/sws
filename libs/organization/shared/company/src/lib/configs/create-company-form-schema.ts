import { FormElement } from '@sws/ui-kit/form/builder';

export const CreateCompanyFormSchema: FormElement[] = [
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