import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FilterAsyncService } from './services/filter-async.service';
import { filterOperators } from './config/filter-conditions.config';
import { MatSelectChange } from '@angular/material';
import { QueryFilter, RequestQueryBuilder } from '@nestjsx/crud-request';
import { SwsQueryFilter, AsyncQueryFilter } from './interfaces/filter-condition.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService, DIALOG_DATA, DialogRef } from '@sws/ui-kit/floating/dialog';
import { FilterComponent } from './components/filter/filter.component';
import { filter, map } from 'rxjs/operators';
import { Greeter } from '@sws/api-interfaces';

@Component({
  selector: 'sws-filter-async-table',
  exportAs: 'filter',
  templateUrl: './filter-async-table.component.html',
  styleUrls: ['./filter-async-table.component.scss']
})
export class FilterAsyncTableComponent implements OnInit {
  @Input() fields: { field: string, label: string }[]
  operators = filterOperators
  
  queryBuilder = RequestQueryBuilder.create()

  @Output() exec = new EventEmitter()

  filter: SwsQueryFilter[] = []

  filters: SwsQueryFilter[] = []

  initForm: FormGroup
  constructor(
    private fb: FormBuilder,
    // public ref: DialogRef,
    private dialogService: DialogService,
  ) {
    this.initForm = this.fb.group({
      field: ['', Validators.required],
      operator: ['', Validators.required],
      value: ['', Validators.required]
    })
    // const req = RequestQueryBuilder.create()
  }

  ngOnInit() {
    setTimeout(() => {
      const greet = new Greeter('Hey')
      console.log(greet)
    }, 3000)
    console.table(this.fields)
  }
  openFilter(queryFilter?: QueryFilter) {
    const greet = new Greeter('Hey')
    const g = greet.getFilter('Ho, lets go')
    console.log(g)

    const ref = this.dialogService.open(
      FilterComponent, {
        data: {
          fields: this.fields,
          operators: this.operators,
          queryFilter
        },
        header: { title: 'Filtro' }
      }
    )
    const sub = ref.afterClosed()
      // .pipe(
      //   filter(f => !!f),
      //   map(({field, ...data}) => {
      //     return { field, ...data }
      //   }),
      //   map(({field, ...data}) => {
      //     return { field, ...data }
      //   })
      // )
      .subscribe((result) => {
        console.log(result)
        if (result) {
          const { field, operator, value } = result
          // this.filter.push(result)
        }
        sub.unsubscribe()
      })
  }
  remove(i) {
    this.filter.splice(i, 1)
  }
  onSelectField({ value }: MatSelectChange) {
    console.log(value)
    const filter: QueryFilter = {
      field: value.field,
      operator: 'starts',
      value: 'Bro'
    }
    // this.filters.push({
    //   ...filter, label: value.label
    // })
    // this.queryBuilder.setFilter({
    //   field
    // })
  }
  onSelectOperator({ value }: MatSelectChange) {
    if (this.initForm.valid) {

    }
  }
  addFilter() {
    if (this.initForm.valid) {
      // const { field, operator, value } = this.initForm.value
      console.log(this.initForm.value)
      this.filter.push(this.initForm.value)
    }
  }
  onExec() {
    console.log(this.filter)
    this.exec.emit(this.filter)
  }
}
