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
import { MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'org-company-projects',
  templateUrl: './company-projects.component.html',
  styleUrls: ['./company-projects.component.scss']
})
export class CompanyProjectsComponent implements OnInit, AfterViewInit {
  company: ICompany;
  dataSource: ProjectDataSource;

  displayedColumns = ['id', 'name', 'description'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @ViewChild('input', { static: false }) input: ElementRef;

  constructor(private route: ActivatedRoute, private service: CompanyService) {}

  ngOnInit() {
    this.company = this.route.snapshot.parent.data.company;
    this.dataSource = new ProjectDataSource(this.service);
    this.dataSource.loadProjects(this.company.id, '', 'ASC', 0, 3);
  }
  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;

          this.loadProjectsPage();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(tap(() => this.loadProjectsPage()))
      .subscribe();
  }
  loadProjectsPage() {
    this.dataSource.loadProjects(
      this.company.id,
      this.input.nativeElement.value,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize
    );
  }
}
