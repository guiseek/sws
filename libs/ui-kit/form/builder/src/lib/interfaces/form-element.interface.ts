import { FormValidator } from './form-validator.interface';
import { FormFieldOption } from './form-field-option.interface';

export type commonErrors = 'required' | 'email' | 'min' | 'max' | 'minlength' | 'maxlength' | 'pattern'

export interface FormElement {
  type: string;
  label?: string;
  name?: string;
  inputType?: string;
  placeholder?: string;
  value?: any;
  hint?: string;
  appearance?: string;
  options?: FormFieldOption[]
  validators?: commonErrors | commonErrors[];
  validations?: FormValidator[];
}
