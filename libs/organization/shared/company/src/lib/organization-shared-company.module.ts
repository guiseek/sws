import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CreateCompanyComponent, CreateProjectComponent],
  exports: [CreateCompanyComponent, CreateProjectComponent]
})
export class OrganizationSharedCompanyModule {}
