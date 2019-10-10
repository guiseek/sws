import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  @Output() logged = new EventEmitter()
  constructor(
    private fb: FormBuilder,
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
        take(1)
      ).subscribe((auth) => this.logged.emit(auth))
    }
  }
}
