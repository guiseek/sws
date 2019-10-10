import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AccountSharedAuthModule } from '@sws/account/shared/auth';
import { UiKitFormBuilderModule } from '@sws/ui-kit/form/builder';

@NgModule({
  imports: [
    CommonModule,
    AccountSharedAuthModule,
    UiKitFormBuilderModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LayoutComponent }
    ])
  ],
  declarations: [LayoutComponent]
})
export class AccountFeatureAuthModule { }
