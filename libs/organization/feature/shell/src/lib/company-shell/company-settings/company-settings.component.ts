import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CreateCompanyFormSchema } from '@sws/organization/shared/company';
import { ActivatedRoute } from '@angular/router';
import { ICompany } from '@sws/api-interfaces';
import { FormElement } from '@sws/ui-kit/form/builder';
import { DialogService } from '@sws/ui-kit/floating/dialog';

@Component({
  selector: 'org-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.scss']
})
export class CompanySettingsComponent implements OnInit {
  elements = CreateCompanyFormSchema
  company: ICompany

  addUserFields: FormElement[] = [{
    type: 'asyncSelect',
    name: 'company',
    label: 'Usuário',
    asyncConfig: {
      endpoint: '/api/users',
      viewValue: 'email',
      value: 'id'
    }
  }]
  @ViewChild('addUser', { static: true }) addUserTmpl: TemplateRef<any>
  constructor(
    private route: ActivatedRoute,
    private dialogService: DialogService
  ) {
  }

  ngOnInit() {
    // const { company } = this.route.snapshot.parent.data.company
    // this.company = {
    //   name: ''
    // }
    this.company = this.route.snapshot.parent.data.company
    console.log(
      this.company
      // this.route.snapshot.parent.data.company
    )
    console.log(
      this.addUserTmpl
    )
  }
  openAddUser() {
    const ref = this.dialogService.open(
      this.addUserTmpl, {
        header: { title: 'Adicionar usuário' }
      }
    )
  }
  onFlip(data) {
    console.log('flip: ', data)
  }
  flip(card) {
    console.log(card)
  }
}
