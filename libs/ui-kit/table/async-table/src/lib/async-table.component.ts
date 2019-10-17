import { Component, OnInit, AfterViewInit, ViewChild, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Subject, BehaviorSubject } from 'rxjs';
import { AsyncTableConfig } from './interfaces/async-table-config.interface';
import { AsyncTableDataSource } from './async-table-data-source';
import { AsyncTableMetadata } from './interfaces/async-table-metadata.interface';
import { HttpClient } from '@angular/common/http';
import { asyncTableConfig, asyncTableBehavior } from './configs/async-table.config';
import { QueryFilter } from '@nestjsx/crud-request';
import { AsyncTableBehavior } from './interfaces';

@Component({
  selector: 'sws-async-table',
  templateUrl: './async-table.component.html',
  styleUrls: ['./async-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AsyncTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator
  @ViewChild(MatSort, { static: false }) sort: MatSort

  @Input() config: AsyncTableConfig
  @Input() meta: AsyncTableMetadata
  @Input() behavior: AsyncTableBehavior

  displayedColumns = []

  selection = new SelectionModel<any>(true, [])

  // @Input() refresh: Subject<boolean>

  // @Input() filters: BehaviorSubject<QueryFilter[]>

  @Output() selectionChanged = new EventEmitter()
  @Output() clicked = new EventEmitter()
  @Output() edit = new EventEmitter()
  @Output() delete = new EventEmitter()

  dataSource: AsyncTableDataSource

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.config = Object.assign(
      {}, asyncTableConfig,
      this.config
    )

    this.behavior = Object.assign(
      {}, asyncTableBehavior,
      this.behavior
    )

    this.displayedColumns = this.meta.columns.map(c => c.columnDef)

    this.dataSource = new AsyncTableDataSource(this.http)

    if (this.config.editable) {
      this.displayedColumns.push('edit')
    }
    if (this.config.deletable) {
      this.displayedColumns.push('delete')
    }
    // if (!this.refresh) {
    //   this.refresh = new Subject
    // }
    // if (!this.filters) {
    //   this.filters = new BehaviorSubject<QueryFilter[]>([])
    // }
  }
  ngAfterViewInit() {
    console.log(
      'this.meta: ', this.meta
    )
    console.log(
      'this.config: ', this.config
    )

    this.dataSource.setup(
      this.meta.endpoint,
      this.paginator,
      this.sort,
      this.behavior.filters,
      this.behavior.refresh
      // this.refresh
    )

    // this.dataSource.
  }
}
