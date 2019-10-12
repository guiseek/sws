import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { IProject } from '@sws/api-interfaces';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { CompanyService } from './company.service';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class ProjectDataSource implements DataSource<IProject> {
  private projectsSubject = new BehaviorSubject<IProject[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private companyService: CompanyService) {}

  loadProjects(
    companyId: number,
    filter: string,
    sortDirection: string,
    pageIndex: number,
    pageSize: number
  ) {
    this.loadingSubject.next(true);

    this.companyService
      .findProjects(companyId, filter, sortDirection, pageIndex, pageSize)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((response: any) => {
        this.projectsSubject.next(response.data);
      });
  }

  connect(collectionViewer: CollectionViewer): Observable<IProject[]> {
    console.log('Connecting data source');
    return this.projectsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.projectsSubject.complete();
    this.loadingSubject.complete();
  }
}
