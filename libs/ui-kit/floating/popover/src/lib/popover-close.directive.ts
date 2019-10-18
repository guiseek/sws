import { Directive, Input, Optional, HostListener } from '@angular/core';
import { PopoverRef } from './popover-ref';

@Directive({
  selector: '[swsPopoverClose]'
})
export class PopoverCloseDirective<T = any> {
  @Input('swsPopoverClose') popoverResult: T;

  constructor(
    @Optional() private popoverRef: PopoverRef<T>
  ) { }

  @HostListener('click') onClick(): void {
    if (!this.popoverRef) {
      console.error('p1PopoverClose is not supported within a template');

      return;
    }

    this.popoverRef.close(this.popoverResult);
  }
}
