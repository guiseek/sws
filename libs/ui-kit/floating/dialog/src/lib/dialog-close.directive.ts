import { Directive, Input, Optional, HostListener, HostBinding } from '@angular/core';
import { DialogRef } from './dialog-ref';

@Directive({
  selector: '[swsDialogClose], [sws-dialog-close], sws-dialog-close',
  exportAs: 'swsDialogClose'
})

export class DialogCloseDirective<T = any> {
  @Input('swsDialogClose') dialogResult: T
  @HostBinding('class') class = 'sws-dialog-close'

  constructor(
    @Optional() private dialogRef: DialogRef<T>
  ) { }

  @HostListener('click') onClick(): void {
    if (!this.dialogRef) {
      console.error('DialogClose is not supported within a template')

      return
    }

    this.dialogRef.close(this.dialogResult)
  }
}
