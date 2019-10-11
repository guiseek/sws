import { Component, OnInit } from '@angular/core';
import { FormElement } from '@sws/ui-kit/form/builder';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from '@sws/ui-kit/floating/dialog';
import { SignupComponent } from '@sws/account/shared/auth';

@Component({
  selector: 'auth-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  formElements: FormElement[] = [{
    type: 'input',
    inputType: 'email',
    name: 'email',
    label: 'E-mail',
    placeholder: 'Seu e-mail',
    validations: [{
      name: 'required',
      validator: Validators.required,
      message: 'Obrigatório'
    }, {
      name: 'email',
      validator: Validators.email,
      message: 'Email inválido'
    }]
  }, {
    type: 'checkbox',
    name: 'terms',
    label: 'Concordo com os termos'
  }]
  constructor(
    private router: Router,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
  }
  onLogged() {
    this.router.navigate(['/conta'])
  }
  openSignUp() {
    const ref = this.dialogService.open(
      SignupComponent, {
        panelClass: 'bg-liquid-cheese'
      }
    )
  }
}
