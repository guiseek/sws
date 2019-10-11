import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiKitNavToolbarModule } from '@sws/ui-kit/nav/toolbar';
import {
  AccountSharedAuthModule,
  TokenInterceptor
} from '@sws/account/shared/auth';
import { AccountSharedUserModule} from '@sws/account/shared/user';
import { ShellComponent } from './shell/shell.component';
import { OverviewComponent } from './overview/overview.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import {
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule
} from '@angular/material';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    AccountSharedAuthModule,
    AccountSharedUserModule,
    UiKitNavToolbarModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        children: [
          {
            path: '',
            component: OverviewComponent,
            pathMatch: 'full'
          },
          {
            path: 'perfil',
            component: ProfileComponent
          },
          {
            path: 'configuracoes',
            component: SettingsComponent
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
