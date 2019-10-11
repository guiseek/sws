import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountSharedAuthModule } from '@sws/account/shared/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AccountSharedAuthModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'auth',
        loadChildren: () =>
          import('@sws/account/feature/auth').then(
            module => module.AccountFeatureAuthModule
          )
      },
      {
        path: 'organizacao',
        loadChildren: () =>
          import('@sws/organization/feature/shell').then(
            module => module.OrganizationFeatureShellModule
          )
      },
      {
        path: 'conta',
        loadChildren: () =>
          import('@sws/account/feature/shell').then(
            module => module.AccountFeatureShellModule
          )
      },
      {
        path: '', redirectTo: 'conta', pathMatch: 'full'
      }
    ]),
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
