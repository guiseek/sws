import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { ICompany } from '@sws/api-interfaces';
import {
  CompanyDataSource,
  CompanyService,
  ProjectDataSource,
  companyProjectsTable
} from '@sws/organization/shared/company';
import { ActivatedRoute } from '@angular/router';
import { AsyncTableResource, AsyncTableComponent } from '@sws/ui-kit/table/async-table';


@Component({
  selector: 'org-company-projects',
  templateUrl: './company-projects.component.html',
  styleUrls: ['./company-projects.component.scss']
})
export class CompanyProjectsComponent implements OnInit {
  company: ICompany;

  displayedColumns = ['id', 'name', 'description'];

  table: AsyncTableResource


  @ViewChild('input', { static: false }) input: ElementRef;
  @ViewChild(AsyncTableComponent, { static: true }) asyncTable
  constructor(
    private route: ActivatedRoute,
    private service: CompanyService
  ) {}

  ngOnInit() {
    console.log(
      'this.asyncTable: ',
      this.asyncTable
    )
    // this.company = this.route.snapshot.parent.data.company;
    const { id, ...company } = this.route.snapshot.parent.data.company
    this.company = {
      id, ...company
    }
    this.table = companyProjectsTable(id)
    console.log(
      this.table
    )
    // this.table = {
    //   meta: {
    //     endpoint: `/api/companies/${id}/projects`,
    //     columns: [
    //       { columnDef: 'name', header: 'Nome', cell: (element) => element.name },
    //       { columnDef: 'domain', header: 'Domínio', cell: (element) => element.domain }
    //     ]
    //   },
    //   config: {

    //   }
    // }
    // this.dataSource = new ProjectDataSource(this.service);
    // this.dataSource.loadProjects(this.company.id, '', 'ASC', 0, 3);
  }
  onRefresh() {
    this.table.behavior.refresh.next(true)
  }
}
