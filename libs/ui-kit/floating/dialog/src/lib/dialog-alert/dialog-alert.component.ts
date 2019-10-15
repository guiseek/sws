import { Component, Inject, ViewChild, TemplateRef, HostBinding, ViewEncapsulation } from '@angular/core';
import { DialogRef } from '../dialog-ref';
import { DIALOG_DATA } from '../configs/dialog.token';
import { DialogAlert } from '../interfaces/dialog-alert.interface';

@Component({
  selector: 'sws-dialog-alert',
  templateUrl: './dialog-alert.component.html',
  styleUrls: ['./dialog-alert.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class DialogAlertComponent {
  @HostBinding('class')
  get dialogType() {
    return this.data.type ? this.data.type : 'info'
  }
  @ViewChild('infoTmpl', { static: true }) info: TemplateRef<SVGElement>
  @ViewChild('helpTmpl', { static: true }) help: TemplateRef<SVGElement>
  @ViewChild('warnTmpl', { static: true }) warn: TemplateRef<SVGElement>
  @ViewChild('dangerTmpl', { static: true }) danger: TemplateRef<SVGElement>
  constructor(
    public ref: DialogRef,
    @Inject(DIALOG_DATA) public data: DialogAlert
  ) { }

  get icon() {
    // const type = this.data.type ? this.data.type : 'info'
    return this[
      this.dialogType
    ]
  }
}
