import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyService } from '@sws/organization/shared/company';
import { Observable } from 'rxjs';
import { ICompany } from '@sws/api-interfaces';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'org-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  companies$: Observable<ICompany[]>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  tableConfig = {
    endpoint: '/api/companies',
    columns: [
      { columnDef: 'name', header: 'Nome', cell: (element) => element.name },
      { columnDef: 'domain', header: 'Domínio', cell: (element) => element.domain }
    ]
  }

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.companies$ = this.companyService.getCompanies();
  }
}
