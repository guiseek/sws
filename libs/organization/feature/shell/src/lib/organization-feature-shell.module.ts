import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { RouterModule } from '@angular/router';
import { UiKitFormBuilderModule } from '@sws/ui-kit/form/builder';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UiKitNavToolbarModule } from '@sws/ui-kit/nav/toolbar';
import { OrganizationSharedCompanyModule } from '@sws/organization/shared/company';
import {
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatButtonModule,
  MatCardModule,
  MatTabsModule
} from '@angular/material';
import { CompaniesComponent } from './companies/companies.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CompanyResolverService } from '@sws/organization/shared/company';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
    FlexLayoutModule,
    OrganizationSharedCompanyModule,
    UiKitNavToolbarModule,
    UiKitFormBuilderModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        data: {
          subtitle: 'Organização'
        },
        children: [
          {
            path: '',
            component: DashboardComponent,
            data: {
              subtitle: 'Dashboard'
            }
          },
          {
            path: 'empresas',
            component: CompaniesComponent,
            data: {
              subtitle: 'Empresas'
            }
          },
          {
            path: 'empresas/:id',
            loadChildren: () =>
              import('./company-shell/company-shell.module').then(
                m => m.CompanyShellModule
              ),
            resolve: {
              company: CompanyResolverService
            }
          }
        ]
      }
    ])
  ],
  providers: [CompanyResolverService],
  declarations: [ShellComponent, DashboardComponent, CompaniesComponent]
})
export class OrganizationFeatureShellModule {}
