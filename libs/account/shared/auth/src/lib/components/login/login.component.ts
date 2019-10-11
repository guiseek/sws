import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { take, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  @Output() logged = new EventEmitter()

  showClear = false
  error: string
  attempts = 0
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private service: AuthService
  ) {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(4)
      ]]
    })
  }

  ngOnInit() {
  }
  onSubmit() {
    this.form.markAllAsTouched()
    if (this.form.valid) {
      this.service.login(
        this.form.value
      ).pipe(
        take(1),
        catchError(this.openSnack.bind(this))
        // catchError(error => {
        //   console.log(error)
        //   this.openSnack(error)
        //   return throwError(error)
        // })
      ).subscribe((auth) => this.logged.emit(auth))
    }
  }

  openSnack({ message }) {
    this.showClear = true
    return this.snackBar.open(message, 'Fechar', {
      duration: 10000
    }).onAction()
  }
}
