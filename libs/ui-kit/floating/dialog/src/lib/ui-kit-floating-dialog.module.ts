import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogContainerComponent } from './dialog-container.component';
import { DialogShellComponent } from './dialog-shell/dialog-shell.component';

import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogCloseDirective } from './dialog-close.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { DialogService } from './dialog.service';
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { A11yModule } from '@angular/cdk/a11y';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';

const modules = [
  A11yModule,
  OverlayModule,
  PortalModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  DragDropModule
];

@NgModule({
  imports: [CommonModule, ...modules],
  declarations: [
    DialogContainerComponent,
    DialogShellComponent,
    DialogCloseDirective,
    DialogAlertComponent,
    DialogConfirmComponent,
    DialogDeleteComponent
  ],
  providers: [DialogService],
  entryComponents: [DialogContainerComponent, DialogShellComponent, DialogAlertComponent, DialogConfirmComponent, DialogDeleteComponent],
  exports: [DialogShellComponent, DialogCloseDirective, DialogDeleteComponent]
})
export class UiKitFloatingDialogModule {}
