import { FormValidator } from './form-validator.interface';

export interface FormElement {
  type: string;
  label?: string;
  name?: string;
  inputType?: string;
  placeholder?: string;
  value?: any;
  hint?: string;
  validations?: FormValidator[];
}
