import { Component, OnInit, Inject } from '@angular/core';
import { DialogRef } from '../dialog-ref';
import { DIALOG_DATA } from '../configs/dialog.token';
import { DialogConfirm } from '../interfaces/dialog-confirm.interface';

@Component({
  selector: 'sws-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {
  constructor(
    public ref: DialogRef,
    @Inject(DIALOG_DATA) public data: DialogConfirm
  ) { }

  ngOnInit() {
  }
  onCancel() {
    this.ref.close(false)
  }
  onConfirm() {
    this.ref.close(true)
  }
}
