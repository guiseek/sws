import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipComponent } from './flip/flip.component';
import { FlipDirective } from './flip/flip.directive';
import { DetailsComponent } from './details/details.component';
import {
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
const modules = [MatCardModule, MatIconModule, MatButtonModule, MatListModule]

@NgModule({
  imports: [CommonModule, ...modules, FlexLayoutModule],
  declarations: [FlipComponent, FlipDirective, DetailsComponent],
  exports: [FlipComponent, FlipDirective, DetailsComponent],
  entryComponents: [FlipComponent]
})
export class UiKitCardModule {}
