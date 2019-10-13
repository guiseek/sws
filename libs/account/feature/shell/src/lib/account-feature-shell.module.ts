import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiKitNavToolbarModule } from '@sws/ui-kit/nav/toolbar';
import {
  AccountSharedAuthModule,
  TokenInterceptor
} from '@sws/account/shared/auth';
import { UiKitCardModule } from '@sws/ui-kit/card';
import { AccountSharedUserModule, UserCompanyGuard} from '@sws/account/shared/user';
import { ShellComponent } from './shell/shell.component';
import { OverviewComponent } from './overview/overview.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import {
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatTabsModule
} from '@angular/material';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
    UiKitCardModule,
    AccountSharedAuthModule,
    AccountSharedUserModule,
    UiKitNavToolbarModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        canActivate: [UserCompanyGuard],
        children: [
          {
            path: 'geral',
            component: OverviewComponent,
            pathMatch: 'prefix'
          },
          {
            path: 'perfil',
            component: ProfileComponent
          },
          {
            path: 'configuracoes',
            component: SettingsComponent
          },
          {
            path: '',
            redirectTo: 'geral'
          }
        ]
      }
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor }
  ],
  declarations: [
    ShellComponent,
    OverviewComponent,
    ProfileComponent,
    SettingsComponent
  ]
})
export class AccountFeatureShellModule {}
