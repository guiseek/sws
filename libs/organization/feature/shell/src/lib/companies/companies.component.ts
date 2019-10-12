import { Component, OnInit } from '@angular/core';
import { CompanyService } from '@sws/organization/shared/company';
import { Observable } from 'rxjs';
import { ICompany } from '@sws/api-interfaces';

@Component({
  selector: 'org-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies$: Observable<ICompany[]>;
  constructor(private service: CompanyService) {}

  ngOnInit() {
    this.companies$ = this.service.getCompanies();
  }
}
