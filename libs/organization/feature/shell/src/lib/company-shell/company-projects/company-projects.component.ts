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
  ProjectDataSource
} from '@sws/organization/shared/company';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'org-company-projects',
  templateUrl: './company-projects.component.html',
  styleUrls: ['./company-projects.component.scss']
})
export class CompanyProjectsComponent implements OnInit {
  company: ICompany;

  displayedColumns = ['id', 'name', 'description'];


  @ViewChild('input', { static: false }) input: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private service: CompanyService
  ) {}

  ngOnInit() {
    this.company = this.route.snapshot.parent.data.company;
    // this.dataSource = new ProjectDataSource(this.service);
    // this.dataSource.loadProjects(this.company.id, '', 'ASC', 0, 3);
  }
}
