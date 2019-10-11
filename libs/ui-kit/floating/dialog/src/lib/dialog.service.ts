import { ComponentType, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { Injectable, InjectionToken, Injector, TemplateRef } from '@angular/core';
import { DialogConfig } from './interfaces/dialog-config.interface';
import { DIALOG_CONFIG } from './configs/dialog.config';
import { DialogRef } from './dialog-ref';
import { DialogContainerComponent } from './dialog-container.component';
import { DIALOG_DATA } from './configs/dialog.token';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private overlay: Overlay, private injector: Injector) { }

  open<D = any>(componentOrTemplate: ComponentType<any> | TemplateRef<any>, config: Partial<DialogConfig> = {}): DialogRef<D> {
    const dialogConfig: DialogConfig = Object.assign({}, DIALOG_CONFIG, config);

    const positionStrategy = this.overlay.position()
      .global()
      .centerVertically()
      .centerHorizontally()
    const overlayRef = this.overlay.create({
      hasBackdrop: dialogConfig.hasBackdrop,
      positionStrategy,
      width: dialogConfig.width,
      height: dialogConfig.height,
      panelClass: dialogConfig.panelClass,
    });

    const dialogRef = new DialogRef(overlayRef, positionStrategy, dialogConfig);

    const dialog = overlayRef.attach(new ComponentPortal(
      DialogContainerComponent,
      null,
      new PortalInjector(
        this.injector,
        new WeakMap<any, any>([
          [DialogRef, dialogRef]
        ])
      )
    )).instance;

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
        new TemplatePortal(
          componentOrTemplate,
          null,
          {
            $implicit: config.data,
            dialog: dialogRef
          }
        )
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
}
