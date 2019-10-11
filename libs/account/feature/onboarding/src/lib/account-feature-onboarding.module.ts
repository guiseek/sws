import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { OnboardUserComponent } from './onboard-user/onboard-user.component';
import { OnboardCompanyComponent } from './onboard-company/onboard-company.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AccountSharedAuthModule } from '@sws/account/shared/auth';
import { UiKitFloatingDialogModule } from '@sws/ui-kit/floating/dialog';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    UiKitFloatingDialogModule,
    AccountSharedAuthModule,
    RouterModule.forChild([
      { path: '', component: ShellComponent, children: [
        { path: '', component: OnboardUserComponent },
        { path: 'empresa', component: OnboardCompanyComponent }
      ] }
    ])
  ],
  declarations: [ShellComponent, OnboardUserComponent, OnboardCompanyComponent]
})
export class AccountFeatureOnboardingModule { }
