import { Component, OnInit } from '@angular/core';
import { ElementBase } from '../element-base';
import { FormFieldOption } from '../../interfaces/form-field-option.interface';
import { formatFieldOptions } from '../../utils';

@Component({
  selector: 'sws-select',
  templateUrl: './select.component.html',
  styles: []
})
export class SelectComponent extends ElementBase implements OnInit {
  options: FormFieldOption[]
  ngOnInit() {
    console.log('field:', this.field)
    const { options, ...config } = this.field
    this.options = formatFieldOptions(
      this.field.options,
      { value: 'value', viewValue: 'viewValue' }
    )
    console.log('field:', this.options)
  }
}
