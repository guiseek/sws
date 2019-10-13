import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipComponent } from './flip/flip.component';
import { FlipDirective } from './flip/flip.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [FlipComponent, FlipDirective],
  exports: [FlipComponent, FlipDirective],
  entryComponents: [FlipComponent]
})
export class UiKitCardModule {}
