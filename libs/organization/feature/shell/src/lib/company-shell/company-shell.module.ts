import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompanyShellComponent } from './company-shell.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { CompanyProjectsComponent } from './company-projects/company-projects.component';


const routes: Routes = [
  { path: '', component: CompanyShellComponent }
];

@NgModule({
  declarations: [CompanyShellComponent, CompanySettingsComponent, CompanyProjectsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CompanyShellModule { }
