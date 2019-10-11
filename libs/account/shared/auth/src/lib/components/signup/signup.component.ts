import { Component, OnInit, Optional } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../services/auth.service';
import { take, catchError } from 'rxjs/operators';
import { DialogRef } from '@sws/ui-kit/floating/dialog';

@Component({
  selector: 'auth-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private service: AuthService,
    private dialogRef: DialogRef<string>,
  ) {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      name: this.fb.group({
        first: ['', [
          Validators.required,
          Validators.maxLength(32)
        ]],
        last: ['', [
          Validators.required,
          Validators.maxLength(32)
        ]],
      }),
      profile: this.fb.group({
        name: ['', [
          Validators.required,
          Validators.maxLength(32)
        ]]
      })
    })
  }
  get name() {
    return this.form.get('name')
  }
  get profile() {
    return this.form.get('profile')
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
      ).subscribe((auth) => this.dialogRef.close(auth))
    }
  }

  openSnack({ message }) {
    return this.snackBar.open(message, 'Fechar', {
      duration: 10000
    }).onAction()
  }
}
// {
//   "email": "lula@gmail.com",
//     "password": "lula",
//       "name": {
//     "first": "Lú",
//       "last": "Visi"
//   },
//   "isActive": true,
//     "profile": {
//     "name": "Lulinha"
//   }
// }
