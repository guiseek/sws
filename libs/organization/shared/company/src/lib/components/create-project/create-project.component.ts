import { Component, OnInit, Output, EventEmitter, Optional, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CompanyService } from '../../services/company.service';
import { IProject } from '@sws/api-interfaces';
import { MatSnackBar } from '@angular/material';
import { DIALOG_DATA, DialogRef } from '@sws/ui-kit/floating/dialog';
import { take, catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'org-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  form: FormGroup
  @Output() created = new EventEmitter<IProject>()
  inProgress = false
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    // private authService: AuthService,
    private service: CompanyService,
    @Optional() public dialogRef: DialogRef,
    @Optional() @Inject(DIALOG_DATA) public data: IProject
  ) {

    this.form = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(100)
      ]],
      description: [],
      company: ['', [
        Validators.required
      ]],
      companyId: ['', [
        Validators.required
      ]],
      users: this.fb.array([])
    })
  }
  get companyId() {
    return this.form.get('companyId')
  }
  get company() {
    return this.form.get('company')
  }
  get users() {
    return this.form.get('users') as FormArray
  }
  ngOnInit() {
    console.log('ref: ', this.dialogRef)
    console.log('data: ', this.data)
    const { users, ...data } = this.data
    if (data) {
      this.form.patchValue(data)
      if (users) {
        users.map((user) => {
          this.users.push(
            this.fb.control(user)
          )
        })
      }
    }
  }
  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.inProgress = true
      this.service
        .createProject(
          this.companyId.value,
          this.form.value
        )
        .pipe(
          take(1),
          catchError((response) => {
            this.openSnack(response.error.message)
            return throwError(response)
          })
        )
        .subscribe((project: IProject) => {
          if (project)
            this.openSnack(
              `Projeto ${project.name} criado`
            )

          this.close(project)
        })
    }
  }
  openSnack(message: string) {
    this.inProgress = false
    const snack$ = this.snackBar
      .open(message, 'Fechar', {
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
      this.created.emit(response)
    }
  }
}
