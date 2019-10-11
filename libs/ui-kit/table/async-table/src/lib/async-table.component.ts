import { Component, OnInit, AfterViewInit, ViewChild, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Subject } from 'rxjs';
import { AsyncTableConfig } from './interfaces/async-table-config.interface';
import { AsyncTableDataSource } from './async-table-data-source';
import { AsyncTableMetadata } from './interfaces/async-table-metadata.interface';
import { HttpClient } from '@angular/common/http';
import { asyncTableConfig } from './configs/async-table.config';

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

  displayedColumns = []

  selection = new SelectionModel<any>(true, [])

  @Input() refresh: Subject<boolean>

  @Output() selectionChanged = new EventEmitter()

  dataSource: AsyncTableDataSource

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.config = Object.assign(
      {}, asyncTableConfig,
      this.config
    )
    this.displayedColumns = this.meta.columns.map(c => c.columnDef)

    this.dataSource = new AsyncTableDataSource(this.http)
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
      this.sort
    )
  }
}
