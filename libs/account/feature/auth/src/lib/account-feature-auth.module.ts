import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AccountSharedAuthModule } from '@sws/account/shared/auth';
import { UiKitFormBuilderModule } from '@sws/ui-kit/form/builder';
import {
  MatCardModule,
  MatButtonModule,
} from '@angular/material';
import { UiKitFloatingDialogModule } from '@sws/ui-kit/floating/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    UiKitFloatingDialogModule,
    AccountSharedAuthModule,
    UiKitFormBuilderModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LayoutComponent },
      {
        path: 'embarque',
        loadChildren: () =>
          import('@sws/account/feature/onboarding').then(
            module => module.AccountFeatureOnboardingModule
          )
      }
    ])
  ],
  declarations: [LayoutComponent]
})
export class AccountFeatureAuthModule {}
