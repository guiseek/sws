import { Component, OnInit, Output, EventEmitter, Optional } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../services/auth.service';
import { take, catchError, tap } from 'rxjs/operators';
import { DialogRef } from '@sws/ui-kit/floating/dialog';

@Component({
  selector: 'auth-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent {
  form: FormGroup

  @Output() updated = new EventEmitter()

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private service: AuthService,
    @Optional() public dialogRef: DialogRef
  ) {
    this.form = this.fb.group({
      token: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.service
        .resetPassword(this.form.value)
        .pipe(
          take(1),
          catchError((error) => this.openSnack(error, 'sws-warn'))
        )
        .subscribe((response) => {
          if (response)
            this.openSnack({
              message: 'Link de recuperação enviado'
            }, 'sws-success')

          this.close(response)
        })
    }
  }
  openSnack({ message }, panelClass = '') {
    console.log('snack: ', message)
    const snack$ = this.snackBar
      .open(message, 'Fechar', {
        duration: 10000, panelClass: [panelClass]
      })
      .onAction()

    snack$.pipe(tap(this.close.bind(this)))

    return snack$
  }
  close(response?: any) {
    if (this.dialogRef) {
      this.dialogRef.close(response)
    } else {
      this.updated.emit(response)
    }
  }

}
