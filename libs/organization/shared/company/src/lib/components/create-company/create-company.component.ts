import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ICompany } from '@sws/api-interfaces';
import { MatSnackBar } from '@angular/material';
import { CompanyService } from '../../services/company.service';
import { take, catchError } from 'rxjs/operators';
import { AuthService } from '@sws/account/shared/auth';
import { validateSubdomain } from '@sws/shared/utils';

@Component({
  selector: 'org-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {
  form: FormGroup
  @Output() created = new EventEmitter<ICompany>()
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private service: CompanyService
  ) {
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(100)
      ]],
      domain: ['', [
        Validators.required,
        Validators.maxLength(100),
        validateSubdomain
      ]],
      description: [],
      users: this.fb.array([])
    })
  }
  get users() {
    return this.form.get('users') as FormArray
  }
  ngOnInit() {
    this.authService.me().pipe(
      take(1)
    ).subscribe((user) => {
      console.log(user)
      this.users.push(
        this.fb.control(user)
      )
    })
  }
  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
    this.service
      .createOne(this.form.value)
      .pipe(
        take(1),
        catchError(this.openSnack.bind(this))
      )
      .subscribe(auth => this.created.emit(auth));
    }
  }
  openSnack({ message }) {
    return this.snackBar
      .open(message, 'Fechar', {
        duration: 10000
      })
      .onAction();
  }
}
