import { Component, Output, EventEmitter, Optional, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../services/auth.service';
import { take, catchError, tap } from 'rxjs/operators';
import { DialogRef, DIALOG_DATA } from '@sws/ui-kit/floating/dialog';
import { throwError } from 'rxjs';

@Component({
  selector: 'auth-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup

  @Output() sended = new EventEmitter()

  inProgress = false
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private service: AuthService,
    @Optional() public dialogRef: DialogRef,
    @Optional() @Inject(DIALOG_DATA) public data
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

  ngOnInit() {
    if (this.data) {
      this.form.patchValue(this.data)
    }
  }
  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.inProgress = true
      this.service
        .forgotPassword(this.form.value)
        .pipe(
          take(1),
          catchError((error) => {
            this.openSnack(error)
            return throwError(error)
          })
        )
        .subscribe((response) => {
          if (response)
            this.openSnack({
              message: 'Código de recuperação enviado'
            })

          this.close(response)
        });
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
      this.sended.emit(response)
    }
  }
}
