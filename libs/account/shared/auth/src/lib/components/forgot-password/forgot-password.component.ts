import { Component, Output, EventEmitter, Optional } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../services/auth.service';
import { take, catchError, tap } from 'rxjs/operators';
import { DialogRef } from '@sws/ui-kit/floating/dialog';

@Component({
  selector: 'auth-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  form: FormGroup

  @Output() sended = new EventEmitter()

  inProgress = false
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private service: AuthService,
    @Optional() public dialogRef: DialogRef
  ) {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      lastPassword: ['', [
        Validators.required,
        Validators.minLength(4)
      ]]
    })
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.inProgress = true
      this.service
        .forgotPassword(this.form.value)
        .pipe(
          take(1),
          catchError((error) => this.openSnack(error, 'sws-warn'))
        )
        .subscribe((response) => {
          if (response)
            this.openSnack({
              message: 'Código de recuperação enviado'
            }, 'sws-success')

          this.close(response)
        });
    }
  }

  openSnack({ message }, panelClass = '') {
    const snack$ = this.snackBar
      .open(message, 'Fechar', {
        duration: 10000, panelClass: [panelClass]
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
      this.sended.emit(response)
    }
  }
}
