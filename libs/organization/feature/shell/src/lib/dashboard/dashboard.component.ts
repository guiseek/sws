import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CompanyService } from '@sws/organization/shared/company';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ICompany } from '@sws/api-interfaces';
import { MatPaginator, MatSort } from '@angular/material';
import { QueryFilter } from '@nestjsx/crud-request';
import { CreateCompanyFormSchema } from '@sws/organization/shared/company';
import { ForkFormBuilder, FormFieldControl, FormControlElement, FormElement } from '@sws/ui-kit/form/builder';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DialogService } from '@sws/ui-kit/floating/dialog';
import { FiltersAsyncService } from '@sws/ui-kit/table/filter-async-table';

const initForm: FormElement[] = [{
  type: 'select',
  name: 'field',
  options: [
    { value: 'name', viewValue: 'Nome' },
    { value: 'domain', viewValue: 'Domínio' }
  ]
}]
@Component({
  selector: 'org-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  companies$: Observable<ICompany[]>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @ViewChild('asyncFilterTable', { static: true }) asyncFilterTable: TemplateRef<any>
  tableConfig = {
    endpoint: '/api/companies',
    columns: [
      { columnDef: 'name', header: 'Nome', cell: (element) => element.name },
      { columnDef: 'domain', header: 'Domínio', cell: (element) => element.domain }
    ]
  }

  elements = initForm
  filterConfig = [
    { field: 'name', label: 'Nome' },
    { field: 'domain', label: 'Domínio' }
  ]

  refresh = new Subject
  filters = new BehaviorSubject<QueryFilter[]>([])

  formConfig = CreateCompanyFormSchema

  form: ForkFormBuilder
  name: FormControlElement
  desc: FormControlElement
  initForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private dialogService: DialogService,
    private filtersService: FiltersAsyncService
  ) {
    console.log(this.fb)

  }

  ngOnInit() {
    this.companies$ = this.companyService.getCompanies();

    console.log(this.asyncFilterTable)
  }
  openFilters() {
    const ref = this.filtersService.openFilters([
      { field: 'name', label: 'Nome' },
      { field: 'domain', label: 'Domínio' }
    ])
    const sub = ref.afterClosed()
      .subscribe((filters) => {
        console.log(filters)
        if (filters) {
          this.filters.next(
            filters.map(({ field, operator, value }) => {
              const filter = {
                field: field.field, value,
                operator: operator.value
              }
              return filter
            })
          )
        }
        sub.unsubscribe()
      })
  }
  execFilter(filter) {
    // this.filters.
    const ref = this.dialogService.open(
      this.asyncFilterTable, {
      data: { filter }
    }
    )
  }
}
