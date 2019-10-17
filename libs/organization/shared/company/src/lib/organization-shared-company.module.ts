import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { CompanyService } from './services/company.service';
import { ProjectService } from './services/project.service';
import { HttpService } from '@sws/shared/utils';
import { ProjectDataSource } from './services/project.datasource';
import { CompanyDataSource } from './services/company.datasource';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountSharedAuthModule } from '@sws/account/shared/auth';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatIconModule, MatSelectModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AccountSharedAuthModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  providers: [
    HttpService,
    CompanyService,
    CompanyDataSource,
    ProjectService,
    ProjectDataSource
  ],
  declarations: [CreateCompanyComponent, CreateProjectComponent],
  entryComponents: [
    CreateProjectComponent
  ],
  exports: [CreateCompanyComponent, CreateProjectComponent]
})
export class OrganizationSharedCompanyModule {}
