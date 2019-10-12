import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

const formBuilder = new FormBuilder

interface FormFieldConfig {
  type: string
  label?: string
  placeholder?: string
  validators: string[]
}
const defaultConfig = {
  type: 'input',
  validators: []
}

export interface FormFieldControl {
  control: FormControl
  config: Partial<FormFieldConfig>
}

export type FormControlElement = {
  control: {
    [K in keyof FormControl]: FormControl[K]
  }
} & Partial<FormFieldConfig>

// const fce: FormControlElement = {

// }

export class ForkFormBuilder extends FormBuilder {
  constructor() {
    super()
    return this
  }
  createFormField(name: string = '', cfg: FormFieldConfig = defaultConfig): FormControlElement {
    const { validators, ...config } = cfg
    const control = this.control(name, [
      ...validators.map((v) => Validators[v])
    ])
    // const controls = this.controls
    // this.group({

    // })
    return { control, ...config }
  }
  createControl(ctrl: FormControl, ) {
    const control = this.control(ctrl)
  }
}

export function buildGroup(fields) {
  const group = formBuilder.group({})
  fields.forEach(field => {
    group.addControl(
      field.name,
      buildControl(field)
    )
  })
  return group
}

export function buildControl(field) {
  const control = formBuilder.control(
    field.value || '',
    bindValidations(field.validations || [])
  )
  return control
}

export function bindValidations(validations: any) {
  if (validations.length > 0) {
    const validList = []
    validations.forEach(valid => {
      validList.push(valid.validator)
    });
    return Validators.compose(validList)
  }
  return null
}

export function getValidationMessages(group: FormGroup, fields) {
  return fields
    .filter((f) => !!f.validations)
    .filter((field) => {
      console.log(field, field.validations)
      return field.validations
        .filter((validation) => {
          return !!group.get(field.name).hasError(validation.name)
        })
      // })
    })
}

export function formatFieldOptions(options, config?: { value: string, viewValue: string }) {
  const opts = []
  console.log(options)
  options.forEach(o => {
    if (typeof o === 'string') {
      opts.push({ value: o, viewValue: o })
    } else {
      opts.push({
        value: o[config.value],
        viewValue: o[config.viewValue]
      })
    }
  })
  return opts
}