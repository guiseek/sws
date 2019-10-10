import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormElement } from '../interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sws-form-builder',
  templateUrl: './form-builder.component.html',
  exportAs: 'swsForm',
  encapsulation: ViewEncapsulation.None
})
export class FormBuilderComponent implements OnInit {
  @Input() elements: FormElement[] = [];
  @Output() formSubmit = new EventEmitter();

  public form: FormGroup;

  get value() {
    return this.form.value
  }
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.createControl()
  }
  onSubmit() {
    this.formSubmit.emit(
      this.value
    )
  }
  createControl(
    { updateOn } = { updateOn: 'change' }
  ) {
    console.log('updateOn: ', { updateOn })
    const group = this.fb.group({}, { updateOn });
    this.elements.forEach(field => {
      if (field.type === "button") return;
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
