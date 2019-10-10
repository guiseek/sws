import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AccountSharedAuthModule } from '@sws/account/shared/auth';

@NgModule({
  imports: [
    CommonModule,
    AccountSharedAuthModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LayoutComponent }
    ])
  ],
  declarations: [LayoutComponent]
})
export class AccountFeatureAuthModule { }
