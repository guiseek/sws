import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DIALOG_DATA, DialogRef } from '@sws/ui-kit/floating/dialog';
import { QueryFilter, CondOperator } from '@nestjsx/crud-request';
import { filterOperators } from '../../config/filter-conditions.config';
import { enumToSelect } from '@sws/shared/utils';

interface DialogDataFilter {
  fields: { field: string, label: string }[]
  operators: { operator: string, label: string }[]
  filter?: QueryFilter[]
}
@Component({
  selector: 'sws-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  form: FormGroup
  fields = []
  operators = enumToSelect(CondOperator, filterOperators)
  constructor(
    private fb: FormBuilder,
    public ref: DialogRef,
    @Inject(DIALOG_DATA) public data: DialogDataFilter
  ) {
    this.form = this.fb.group({
      field: ['', Validators.required],
      operator: ['', Validators.required],
      value: ['', Validators.required]
    })
  }

  ngOnInit() {
    console.log('gilter: ', this.data)
  }
  onCancel() {
    this.ref.close()
  }
  onConfirm() {
    console.log(this.form.value)
    if (this.form.valid) {
      this.ref.close(
        this.form.value
      )
    } else {
      this.form.markAllAsTouched()
    }
  }
}
