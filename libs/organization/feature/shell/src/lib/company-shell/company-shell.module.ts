import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompanyShellComponent } from './company-shell.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { CompanyProjectsComponent } from './company-projects/company-projects.component';
import {
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {
    path: '',
    component: CompanyShellComponent,
    children: [
      { path: 'configuracoes', component: CompanySettingsComponent },
      { path: 'projetos', component: CompanyProjectsComponent },
      { path: '', redirectTo: 'projetos', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [
    CompanyShellComponent,
    CompanySettingsComponent,
    CompanyProjectsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class CompanyShellModule {}
