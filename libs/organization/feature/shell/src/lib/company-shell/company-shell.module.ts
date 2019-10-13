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
  MatInputModule,
  MatCardModule,
  MatListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UiKitFormBuilderModule } from '@sws/ui-kit/form/builder';
import { UiKitCardModule } from '@sws/ui-kit/card';
import { CompanyResolverService } from '@sws/organization/shared/company';
import { UiKitFloatingDialogModule } from '@sws/ui-kit/floating/dialog';
import { AsyncTableModule } from '@sws/ui-kit/table/async-table';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@sws/account/shared/auth';

const routes: Routes = [
  {
    path: '',
    component: CompanyShellComponent,
    resolve: {
      company: CompanyResolverService
    },
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
    MatCardModule,
    MatListModule,
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
    AsyncTableModule,
    UiKitFloatingDialogModule,
    UiKitFormBuilderModule,
    UiKitCardModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor },
  ]
})
export class CompanyShellModule {}
