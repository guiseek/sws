import { Component, OnInit } from '@angular/core';
import { FormElement } from '@sws/ui-kit/form/builder';
import { Validators } from '@angular/forms';

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
  constructor() { }

  ngOnInit() {
  }

}
