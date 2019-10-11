import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { OnboardUserComponent } from './onboard-user/onboard-user.component';
import { OnboardCompanyComponent } from './onboard-company/onboard-company.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AccountSharedAuthModule, TokenInterceptor } from '@sws/account/shared/auth';
import { UiKitFloatingDialogModule } from '@sws/ui-kit/floating/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { OrganizationSharedCompanyModule } from '@sws/organization/shared/company';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    OrganizationSharedCompanyModule,
    UiKitFloatingDialogModule,
    AccountSharedAuthModule,
    RouterModule.forChild([
      { path: '', component: ShellComponent, children: [
        { path: '', component: OnboardUserComponent },
        { path: 'empresa', component: OnboardCompanyComponent }
      ] }
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor }
  ],
  declarations: [ShellComponent, OnboardUserComponent, OnboardCompanyComponent]
})
export class AccountFeatureOnboardingModule { }
