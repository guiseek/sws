import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { InputComponent } from './elements/input/input.component';
import { ButtonComponent } from './elements/button/button.component';
import { CheckboxComponent } from './elements/checkbox/checkbox.component';
import { DateComponent } from './elements/date/date.component';
import { RadiobuttonComponent } from './elements/radiobutton/radiobutton.component';
import { SelectComponent } from './elements/select/select.component';
import { AsyncSelectComponent } from './elements/async-select/async-select.component';
import { TextareaComponent } from './elements/textarea/textarea.component';
import { FieldBuilderDirective } from './directives/field-builder.directive';

import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule,
  MatRadioModule,
  MAT_DATE_LOCALE
} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMomentDateModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule,
  MatRadioModule
];

const components = [
  FormBuilderComponent,
  InputComponent,
  ButtonComponent,
  CheckboxComponent,
  DateComponent,
  RadiobuttonComponent,
  SelectComponent,
  AsyncSelectComponent,
  TextareaComponent
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...modules
  ],
  declarations: [
    ...components,
    FieldBuilderDirective
  ],
  exports: [
    ...components,
    FieldBuilderDirective
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  entryComponents: [
    ...components
  ]
})
export class UiKitFormBuilderModule { }
