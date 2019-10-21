import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncCompleteComponent } from './async-complete/async-complete.component';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  declarations: [AsyncCompleteComponent],
  exports: [AsyncCompleteComponent]
})
export class UiKitFormSearchModule {}
