import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AsyncTableComponent } from './async-table.component';
import { FormatCellPipe } from './pipes/format-cell.pipe';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule, MatIconModule, MatCheckboxModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

const modules = [
  MatPaginatorModule, MatSortModule, MatTableModule, CdkTableModule, MatButtonModule, MatIconModule, MatCheckboxModule
]

@NgModule({
  imports: [CommonModule, HttpClientModule, ...modules],
  declarations: [AsyncTableComponent, FormatCellPipe],
  providers: [DatePipe],
  exports: [AsyncTableComponent]
})
export class AsyncTableModule {
  constructor(
    private tableConfig: MatPaginatorIntl
  ) {
    tableConfig.firstPageLabel = 'Primeira'
    tableConfig.itemsPerPageLabel = 'Por página'
    tableConfig.lastPageLabel = 'Última'
    tableConfig.nextPageLabel = 'Próxima'
    tableConfig.previousPageLabel = 'Anterior'
  }
}
