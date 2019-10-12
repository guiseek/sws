import {
  Component,
  ViewChild,
  ElementRef,
  ComponentRef,
  EmbeddedViewRef
} from '@angular/core';
import {
  CdkPortalOutlet,
  BasePortalOutlet,
  ComponentPortal,
  TemplatePortal
} from '@angular/cdk/portal';
import { DialogConfig } from './interfaces/dialog-config.interface';
import { DialogRef } from './dialog-ref';

@Component({
  selector: 'sws-dialog-container',
  template: `
    <ng-container cdkPortalOutlet></ng-container>
  `,
  styles: [`:host {
    background: white;
    border-radius: 6px;
  }`]
})
export class DialogContainerComponent extends BasePortalOutlet {
  @ViewChild(CdkPortalOutlet, { static: true }) portalOutlet: CdkPortalOutlet;
  config: DialogConfig;
  constructor(public ref: DialogRef, public _elementRef: ElementRef) {
    super();
    console.log(_elementRef);
    this.config = ref.config;
  }

  attachComponentPortal<T>(
    componentPortal: ComponentPortal<any>
  ): ComponentRef<T> {
    return this.portalOutlet.attachComponentPortal(componentPortal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    return this.portalOutlet.attachTemplatePortal(portal);
  }
}
