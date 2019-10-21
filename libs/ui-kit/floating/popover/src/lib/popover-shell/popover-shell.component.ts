import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Component, ComponentRef, EmbeddedViewRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser'
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sws-popover-shell',
  templateUrl: './popover-shell.component.html',
  styleUrls: ['./popover-shell.component.scss']
})
export class PopoverShellComponent extends BasePortalOutlet {
  @ViewChild(CdkPortalOutlet, { static: true }) portalOutlet: CdkPortalOutlet;

  attachComponentPortal<T>(componentPortal: ComponentPortal<any>): ComponentRef<T> {
    return this.portalOutlet.attachComponentPortal(componentPortal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    return this.portalOutlet.attachTemplatePortal(portal);
  }
}
