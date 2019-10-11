import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { AsyncSelectComponent } from './async-select/async-select.component';

export const FORM_ELEMENTS_MAPPER = {
  input: InputComponent,
  checkbox: CheckboxComponent,
  button: ButtonComponent,
  asyncSelect: AsyncSelectComponent
};
