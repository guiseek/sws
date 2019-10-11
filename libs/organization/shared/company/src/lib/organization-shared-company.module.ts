import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { CompanyService } from './services/company.service';
import { ProjectService } from './services/project.service';
import { HttpService } from '@sws/shared/utils';
import { ProjectDataSource } from './services/project.datasource';
import { CompanyDataSource } from './services/company.datasource';

@NgModule({
  imports: [CommonModule],
  providers: [
    HttpService,
    CompanyService,
    CompanyDataSource,
    ProjectService,
    ProjectDataSource
  ],
  declarations: [CreateCompanyComponent, CreateProjectComponent],
  exports: [CreateCompanyComponent, CreateProjectComponent]
})
export class OrganizationSharedCompanyModule {}
