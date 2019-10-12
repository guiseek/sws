import { DataSource } from '@angular/cdk/table';
import { Observable, of, BehaviorSubject, merge, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CollectionViewer } from '@angular/cdk/collections';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { QueryFilter, RequestQueryParser, RequestQueryBuilder } from '@nestjsx/crud-request';

export class AsyncTableDataSource<T = any> extends DataSource<T> {
  private dataSubject = new BehaviorSubject<T[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  refresh = new Subject()

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
    sort: MatSort,
    filters: BehaviorSubject<QueryFilter[]>,
    refresh: Subject<boolean>
  ) {

    merge(
      sort.sortChange,
      paginator.page,
      filters,
      refresh
    ).pipe(
      startWith({}),
      switchMap(() => this.request(
        endpoint,
        this.getParams(sort, paginator, filters)
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
  getFilterParams({ value }) {

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
    { value }: BehaviorSubject<QueryFilter[]>
    // { value }: BehaviorSubject<string> = ''
  ) {

    const httpParams = new HttpParams({
      fromString: RequestQueryBuilder.create({
        filter: value
      }).query()
    })
    console.log(value)

    if (!!value) {
      const req = RequestQueryBuilder.create({
        filter: value
      })
      // value.map(({ field, operator, ...values }) => {
      //   req.setFilter()
      // })
      // req.filter = { ...value }

      // console.log('req: ', req)

      console.log('query: ', req.query())

      // httpParams.set()
    }
    return httpParams
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
