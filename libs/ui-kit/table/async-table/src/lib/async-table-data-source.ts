import { DataSource } from '@angular/cdk/table';
import { Observable, of, BehaviorSubject, merge, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CollectionViewer } from '@angular/cdk/collections';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export class AsyncTableDataSource<T = any> extends DataSource<T> {
  private dataSubject = new BehaviorSubject<T[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public data
  public loading$ = this.loadingSubject.asObservable();
  public resultsLength = 0
  constructor(
    private http: HttpClient
  ) {
    super()
    this.loadingSubject.next(true)
  }

  connect(collectionViewer: CollectionViewer): Observable<T[]> {
    // ...
    return this.dataSubject.asObservable()
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.dataSubject.complete();
    this.loadingSubject.complete();
  }
  setup(
    endpoint: string,
    paginator: MatPaginator,
    sort: MatSort
  ) {

    merge(
      sort.sortChange,
      paginator.page
    ).pipe(
      startWith({}),
      switchMap(() => this.request(
        endpoint,
        this.getParams(sort, paginator)
      ))
    ).subscribe((data) => {
      this.dataSubject.next(data)
    })
  }
  request(endpoint: string, params: HttpParams) {
    this.loadingSubject.next(true)
    return this.http.get(endpoint, { params }).pipe(
      map((response: any) => {
        this.loadingSubject.next(false)
        const { data, total } = response
        if (data && total) {
          this.data = data
          this.resultsLength = response.total
          return data
        }
        console.table(response)
        this.data = response
        return response
      }),
      catchError((error) => {
        this.loadingSubject.next(false)
        console.log('errorrrrr: ', error)
        return of([])
      })
    )
  }
  /**
   * 
   * @param sort: MatSort 
   * @param paginator: MatPaginator
   * @param filter: Resolver 
   */
  getParams(
    { active, direction }: MatSort,
    { pageIndex, pageSize }: MatPaginator,
    // { value }: BehaviorSubject<string> = ''
  ) {
    return new HttpParams()
      .set('sort', `${active},${direction.toUpperCase()}`)
      .set('page', `${pageIndex + 1}`)
      .set('per_page', `${pageSize}`)
    // .set('filter', value)
  }
  // connect(data): Observable<T[]> {
  //   return of(data)
  // }
  // disconnect() {}
}
