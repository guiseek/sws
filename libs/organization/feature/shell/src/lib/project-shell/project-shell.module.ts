import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProjectShellComponent } from './project-shell.component';
import { ProjectUsersComponent } from './project-users/project-users.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule, MatGridListModule, MatMenuModule, MatIconModule, MatButtonModule, MatAutocompleteModule, MatInputModule, MatTabsModule, MatListModule } from '@angular/material';
import { ProjectResolverService } from '@sws/organization/shared/company';
import { UiKitFormSearchModule } from '@sws/ui-kit/form/search';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UiKitFloatingPopoverModule } from '@sws/ui-kit/floating/popover';
import { ProjectSettingsComponent } from './project-settings/project-settings.component';

const routes: Routes = [
  {
    path: ':id',
    component: ProjectShellComponent,
    resolve: {
      project: ProjectResolverService
    },
    children: [
      {
        path: 'dashboard',
        component: ProjectDashboardComponent
      },
      {
        path: 'usuarios',
        component: ProjectUsersComponent
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [
    ProjectShellComponent,
    ProjectDashboardComponent,
    ProjectUsersComponent,
    ProjectSettingsComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    UiKitFormSearchModule,
    UiKitFloatingPopoverModule,
    MatListModule,
    MatAutocompleteModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectShellModule { }
