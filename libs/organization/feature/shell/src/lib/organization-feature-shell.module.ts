import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { RouterModule } from '@angular/router';
import { UiKitFormBuilderModule } from '@sws/ui-kit/form/builder';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UiKitNavToolbarModule } from '@sws/ui-kit/nav/toolbar';
import { AccountSharedUserModule } from '@sws/account/shared/user';
import { OrganizationSharedCompanyModule } from '@sws/organization/shared/company';
import { AsyncTableModule } from '@sws/ui-kit/table/async-table';

import {
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatButtonModule,
  MatCardModule,
  MatTabsModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { CompaniesComponent } from './companies/companies.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CompanyResolverService } from '@sws/organization/shared/company';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@sws/account/shared/auth';
import { FilterAsyncTableModule } from '@sws/ui-kit/table/filter-async-table';
import { ReactiveFormsModule } from '@angular/forms';
import { UiKitFormErrorModule } from '@sws/ui-kit/form/error';
import { UiKitFloatingDialogModule } from '@sws/ui-kit/floating/dialog';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiKitFormErrorModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    MatTabsModule,
    FlexLayoutModule,
    FilterAsyncTableModule,
    AccountSharedUserModule,
    OrganizationSharedCompanyModule,
    UiKitFloatingDialogModule,
    AsyncTableModule,
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
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor },
    CompanyResolverService,
  ],
  declarations: [ShellComponent, DashboardComponent, CompaniesComponent]
})
export class OrganizationFeatureShellModule {}
