import { Component, OnInit, Output, EventEmitter, Optional } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../services/auth.service';
import { take, catchError, tap } from 'rxjs/operators';
import { DialogRef } from '@sws/ui-kit/floating/dialog';
import { throwError } from 'rxjs';

@Component({
  selector: 'auth-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent {
  form: FormGroup

  @Output() updated = new EventEmitter()

  inProgress = false
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
      this.inProgress = true
      this.service
        .resetPassword(this.form.value)
        .pipe(
          take(1),
          catchError(({ error }) => {
            this.openSnack(error)
            return throwError(error)
          })
        )
        .subscribe((response) => {
          if (response)
            this.openSnack({
              message: 'Senha alterada'
            })

          this.close(response)
        })
    }
  }
  openSnack(error) {
    this.inProgress = false
    const snack$ = this.snackBar
      .open(error.message, 'Fechar', {
        duration: 10000
      })
      .onAction()

    snack$.pipe(tap(this.close.bind(this)))

    return snack$
  }
  close(response?: any) {
    this.inProgress = false
    if (this.dialogRef) {
      this.dialogRef.close(response)
    } else {
      this.updated.emit(response)
    }
  }
}
