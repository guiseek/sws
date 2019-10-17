import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProjectShellComponent } from './project-shell.component';
import { ProjectUsersComponent } from './project-users/project-users.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule, MatGridListModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

const routes: Routes = [
  { path: ':id', component: ProjectShellComponent, children: [
    {
      path: 'dashboard',
      component: ProjectDashboardComponent
    },
    {
      path: 'usuarios',
      component: ProjectUsersComponent
    },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  ] }
];

@NgModule({
  declarations: [
    ProjectShellComponent,
    ProjectDashboardComponent,
    ProjectUsersComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectShellModule { }
