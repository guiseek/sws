import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterAsyncTableComponent } from './filter-async-table.component';
import { FilterComponent } from './components/filter/filter.component';
import {
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterAsyncService } from './services/filter-async.service';
import { UiKitFloatingDialogModule } from '@sws/ui-kit/floating/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CondOperatorReadablePipe } from './pipes/cond-operator-readable.pipe';
import { FiltersComponent } from './components/filters/filters.component';
import { FiltersAsyncService } from './services/filters-async.service';

const modules = [
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiKitFloatingDialogModule,
    DragDropModule,
    ...modules
  ],
  declarations: [
    FilterAsyncTableComponent,
    FilterComponent,
    CondOperatorReadablePipe,
    FiltersComponent
  ],
  providers: [
    FilterAsyncService,
    FiltersAsyncService
  ],
  entryComponents: [
    FilterAsyncTableComponent,
    FilterComponent,
    FiltersComponent
  ],
  exports: [
    FilterAsyncTableComponent,
    FilterComponent,
    FiltersComponent
  ]
})
export class FilterAsyncTableModule { }
