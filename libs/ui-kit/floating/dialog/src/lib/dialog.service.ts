import { ComponentType, Overlay } from '@angular/cdk/overlay';
import {
  ComponentPortal,
  PortalInjector,
  TemplatePortal
} from '@angular/cdk/portal';
import {
  Injectable,
  InjectionToken,
  Injector,
  TemplateRef
} from '@angular/core';
import { DialogConfig } from './interfaces/dialog-config.interface';
import { DIALOG_CONFIG } from './configs/dialog.config';
import { DialogRef } from './dialog-ref';
import { DialogContainerComponent } from './dialog-container.component';
import { DIALOG_DATA } from './configs/dialog.token';
import { DialogShellComponent } from './dialog-shell/dialog-shell.component';
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';
import { DialogHeader } from './interfaces/dialog-header.interface';
import { DialogAlert } from './interfaces/dialog-alert.interface';
import { DialogConfirm } from './interfaces/dialog-confirm.interface';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) { }

  open<D = any, R = any>(
    componentOrTemplate: ComponentType<any> | TemplateRef<any>,
    config: Partial<DialogConfig> = {}
  ): DialogRef<R> {
    const dialogConfig: DialogConfig<D> = Object.assign({}, DIALOG_CONFIG, config);

    const positionStrategy = this.overlay
      .position()
      .global()
      .centerVertically()
      .centerHorizontally();

    const overlayRef = this.getOverlay(
      positionStrategy,
      dialogConfig
    )

    const dialogRef = new DialogRef<R>(overlayRef, positionStrategy, dialogConfig);

    const dialog = overlayRef.attach(
      new ComponentPortal(
        !!config.withShell ? DialogShellComponent : DialogContainerComponent,
        null,
        new PortalInjector(
          this.injector,
          new WeakMap<any, any>([[DialogRef, dialogRef]])
        )
      )
    ).instance;

    // if (dialogConfig.header) {
    //   const { color, ...header } = dialogConfig.header
    //   dialog.header = {
    //     ...header,
    //     color: color ? color : 'accent'
    //   }
    // }

    if (componentOrTemplate instanceof TemplateRef) {
      // rendering a provided template dynamically
      dialog.attachTemplatePortal(
        new TemplatePortal(componentOrTemplate, null, {
          $implicit: <D>config.data,
          dialog: dialogRef
        })
      );
    } else {
      // rendering a provided component dynamically
      dialog.attachComponentPortal(
        new ComponentPortal(
          componentOrTemplate,
          null,
          new PortalInjector(
            this.injector,
            new WeakMap<any, any>([
              [DIALOG_DATA, config.data],
              [DialogRef, dialogRef]
            ])
          )
        )
      );
    }
    // dialogRef
    //   .updateSize(dialogConfig.width, dialogConfig.height)
    //   .updatePosition()

    return dialogRef;
  }
  getOverlay(positionStrategy, dialogConfig) {
    return this.overlay.create({
      hasBackdrop: dialogConfig.hasBackdrop,
      positionStrategy,
      width: dialogConfig.width,
      height: dialogConfig.height,
      panelClass: dialogConfig.panelClass
    });
  }
  openAlert(data: DialogAlert) {
    return this.open(
      DialogAlertComponent, { data, panelClass: 'dialog-alert' }
    )
  }
  openConfirm(data: DialogConfirm) {
    return this.open(
      DialogConfirmComponent, {
        data, withShell: true,
        header: {
          title: 'Confirmação',
          color: data.color
        },
        draggable: true
      }
    )
  }
}
