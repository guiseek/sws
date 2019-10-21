import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverShellComponent } from './popover-shell/popover-shell.component';
import { PopoverArrowDirective } from './popover-arrow.directive';
import { PopoverCloseDirective } from './popover-close.directive';
import { PopoverService } from './popover.service';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule
  ],
  declarations: [PopoverShellComponent, PopoverArrowDirective, PopoverCloseDirective],
  entryComponents: [PopoverShellComponent],
  providers: [PopoverService],
  exports: [PopoverCloseDirective]
})
export class UiKitFloatingPopoverModule { }
