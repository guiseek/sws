import { FormElement } from '../interfaces/form-element.interface';
import { FormGroup } from '@angular/forms';
import { Input } from '@angular/core';

export class ElementBase {
  @Input() field: FormElement;
  @Input() group: FormGroup;
}