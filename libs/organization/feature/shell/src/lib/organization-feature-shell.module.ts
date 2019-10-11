import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { RouterModule } from '@angular/router';
import { UiKitFormBuilderModule } from '@sws/ui-kit/form/builder';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UiKitNavToolbarModule } from '@sws/ui-kit/nav/toolbar';

@NgModule({
  imports: [
    CommonModule,
    UiKitNavToolbarModule,
    UiKitFormBuilderModule,
    RouterModule.forChild([{
      path: '', component: ShellComponent
    },
      { path: 'empresa', loadChildren: () => import('./company-shell/company-shell.module').then(m => m.CompanyShellModule) }])
  ],
  declarations: [ShellComponent, DashboardComponent]
})
export class OrganizationFeatureShellModule {}
