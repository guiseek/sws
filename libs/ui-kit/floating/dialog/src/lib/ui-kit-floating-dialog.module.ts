import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogContainerComponent } from './dialog-container.component';
import { DialogShellComponent } from './dialog-shell/dialog-shell.component';

import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogCloseDirective } from './dialog-close.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { DialogService } from './dialog.service';

const modules = [
  OverlayModule,
  PortalModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  DragDropModule
];

@NgModule({
  imports: [CommonModule, ...modules],
  declarations: [
    DialogContainerComponent,
    DialogShellComponent,
    DialogCloseDirective
  ],
  providers: [DialogService],
  entryComponents: [DialogContainerComponent, DialogShellComponent],
  exports: [DialogShellComponent, DialogCloseDirective]
})
export class UiKitFloatingDialogModule {}
