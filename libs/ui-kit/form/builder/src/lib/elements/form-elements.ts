import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { AsyncSelectComponent } from './async-select/async-select.component';
import { TextareaComponent } from './textarea/textarea.component';
import { SelectComponent } from './select/select.component';

export const FORM_ELEMENTS_MAPPER = {
  input: InputComponent,
  checkbox: CheckboxComponent,
  button: ButtonComponent,
  asyncSelect: AsyncSelectComponent,
  textarea: TextareaComponent,
  select: SelectComponent
};
