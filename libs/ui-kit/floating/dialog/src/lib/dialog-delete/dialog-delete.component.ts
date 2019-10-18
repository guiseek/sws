import { Component, OnInit, Inject } from '@angular/core';
import { DialogRef } from '../dialog-ref';
import { DIALOG_DATA } from '../configs/dialog.token';
import { DialogDelete } from '../interfaces/dialog-delete.interface';

@Component({
  selector: 'sws-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent implements OnInit {
  constructor(
    public ref: DialogRef<boolean>,
    @Inject(DIALOG_DATA) public data: DialogDelete
  ) { }

  ngOnInit() {
  }
  onCancel() {
    this.ref.close(false)
  }
  onDelete() {
    this.ref.close(true)
  }
}
